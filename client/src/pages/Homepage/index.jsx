import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Divider, MapContainerStyle, Sidebar, Wrapper, ListingWrapper, MapWrapper, Heading, Text1, Text2 } from "./Homepage";
import * as api from "../../api";
import { ListingList } from "../../components/listingList";
import { ListingSearchBar } from "../../components/listingSearch";
import MainNavBar from "../../components/MainNavbar";
import marker from "../../assets/mymarker.png";

mapboxgl.accessToken = 'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw';
function Homepage() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-76.620277);
    const [lat, setLat] = useState(39.328888);
    const [zoom, setZoom] = useState(14);
    const [listings, setListings] = useState([]);
    const [features, setFeatures] = useState([]);
    const [filteredListings, setFilteredListings] = useState(listings);
    const [searchLng, setSearchLng] = useState();
    const [searchLat, setSearchLat] = useState();
  
    const handleSearch = (query) => {
      const filtered = listings.filter((listing) => {
        return listing.address.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredListings(filtered);
    };
    useEffect(() => {
        const fetchData = async () => {
          const data = await api.getAllListings();
          const features = data.data.map((listing) => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [listing.longitude, listing.latitude],
            },
            properties: {
              title: `$${listing.pricing}`,
            },
          }));
      
          setListings(data.data);
          setFeatures(features);
      
          if (!mapContainer.current) return;
          if (!map.current) {
            map.current = new mapboxgl.Map({
              container: mapContainer.current,
              style: 'mapbox://styles/mapbox/light-v11',
              center: [lng, lat],
              zoom: zoom,
              attributionControl: false
            }).addControl(
              new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
              })
            );
          }
      
          map.current.on('load', () => {
            map.current.loadImage(
              'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
              (error, image) => {
                if (error) throw error;
                if (map.current.hasImage('custom-marker', image)) {
                  map.current.removeImage('custom-marker', image);
                }
                map.current.addImage('custom-marker', image);
      
                map.current.addSource('points', {
                  type: 'geojson',
                  data: {
                    type: 'FeatureCollection',
                    features: features,
                  },
                });
      
                map.current.addLayer({
                  id: 'points',
                  type: 'symbol',
                  source: 'points',
                  layout: {
                    'icon-image': 'custom-marker',
                    'text-field': ['get', 'title'],
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-offset': [0, 1.25],
                    'text-anchor': 'top',
                  },
                });
              }
            );
          });
        };
      
        fetchData();
      }, []);
      


    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <Divider>
            <MainNavBar onSearch={handleSearch}/>
            <Wrapper>
                <Heading>
                    <Text1>
                        Storage Near Johns Hopkins University
                    </Text1>
                    <Text2>
                        50 + Spaces
                    </Text2>
                </Heading>
                <ListingWrapper>
                    <Sidebar>
                        <ListingList listings={listings} />
                    </Sidebar>
                </ListingWrapper>
                <MapWrapper>
                    <MapContainerStyle ref={mapContainer} />
                </MapWrapper>
            </Wrapper>
        </Divider>
    );
}

export default Homepage;