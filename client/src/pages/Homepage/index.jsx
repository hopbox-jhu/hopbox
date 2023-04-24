import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Divider, MapContainerStyle, Sidebar, Wrapper, ListingWrapper, MapWrapper, Heading, Text1, Text2, Filter } from "./Homepage";
import * as api from "../../api";
import { ListingList } from "../../components/listingList";
import MainNavBar from "../../components/MainNavbar";
import marker from "../../assets/mymarker.png";
import { Select, Switch } from "@mantine/core";
mapboxgl.accessToken = 'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw';

function sortListingsByDistance(listings, lng, lat) {
  return listings.sort((a, b) => {
    const distanceA = distance(lng, lat, a.longitude, a.latitude);
    const distanceB = distance(lng, lat, b.longitude, b.latitude);
    return distanceA - distanceB;
  });
}

function distance(lng1, lat1, lng2, lat2) {
  const earthRadius = 3958.8;
  const latDiff = (lat2 - lat1) * (Math.PI / 180);
  const lonDiff = (lng2 - lng1) * (Math.PI / 180);
  const a =
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(lonDiff / 2) *
      Math.sin(lonDiff / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;
  return distance;
}

function sortListingsByPrice(listings) {
  return listings.sort((a, b) => {
      return a.pricing - b.pricing;
  });
}

function sortListingsByPriceReverse(listings) {
  return listings.sort((a, b) => {
      return b.pricing - a.pricing;
  });
}

function sortListingsBySize(listings) {
  return listings.sort((a, b) => {
      return a.length * a.width - b.length * b.width;
  });
}

function sortListingsBySizeReverse(listings) {
  return listings.sort((a, b) => {
      return b.length * b.width - a.length * a.width;
  });
}

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
    const [availableOnly, setAvailableOnly] = useState(true);
    const [sorting, setSorting] = useState("Distance");
  
    const handleSearch = async (query) => {
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'}`);
        const data = await response.json();
        const dataFeatures = data.features;
        if (dataFeatures.length > 0) {
            const feature = dataFeatures[0];
            setSearchLng(feature.center[0]);
            setSearchLat(feature.center[1]);
        }
        if (searchLng && searchLat) {
            setLng(searchLng);
            setLat(searchLat);
            setZoom(14);
            map.current.setCenter([searchLng, searchLat]);
        }
        if (sorting === "Distance") {
            sortListingsByDistance(listings, searchLng, searchLat);
        } else if (sorting === "Lowest Price") {
            sortListingsByPrice(listings);
        } else if (sorting === "Highest Price") {
            sortListingsByPriceReverse(listings);
        } else if (sorting === "Smallest Space") {
            sortListingsBySize(listings);
        } else if (sorting === "Largest Space") {
            sortListingsBySizeReverse(listings);
        }
        var filtered = listings.filter(
            (listing) => distance(listing.longitude, listing.latitude, searchLng, searchLat) <= 10
        );
        if (availableOnly) {
            filtered = filtered.filter(
                (listing) => listing.isRented == false
            );
        }
      setFilteredListings(filtered)
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
              style: 'mapbox://styles/mapbox/streets-v12',
              center: [lng, lat],
              zoom: zoom,
              attributionControl: false
            });
          }
      
          map.current.on('load', () => {
            map.current.removeImage();
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
                  <Filter className="filter" >
                  <Select
                    style = {{width:"20%"}}
                    radius="md"
                    size ="sm"
                    placeholder="Sort by:"
                    onChange={(event) => setSorting(event.target.value)}
                    data={[
                      { value: 'Distance', label: 'Distance' },
                      { value: 'Lowest Price', label: 'Lowest Price' },
                      { value: 'Highest Price', label: 'Highest Price' },
                      { value: 'Smallest Space', label: 'Smallest Space' },
                      { value: 'Largest Space', label: 'Largest Space' },
                    ]}
                  />
                    <Switch
                      labelPosition="left"
                      style = {{marginTop:"5px"}}
                      label="Only show currently available listings"
                      checked={availableOnly}
                      onChange={(event) => setAvailableOnly(event.target.checked)}
                    />

                  {/* <input
                  id="available"
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(event) => setAvailableOnly(event.target.checked)}
                  />
                  <Text2>Only show currently available listings</Text2> */}

                  </Filter>
                </Heading>
              

                <ListingWrapper>
                    <Sidebar>
                        <ListingList listings={filteredListings} />
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