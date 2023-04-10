import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { MapContainerStyle, Sidebar, Wrapper, ListingWrapper, MapWrapper } from "./Map";
import * as api from "../../api";
import { ListingList } from "../listingList";
import { ListingSearchBar } from "../listingSearch";


mapboxgl.accessToken = 'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-76.620277);
    const [lat, setLat] = useState(39.328888);
    const [zoom, setZoom] = useState(14);
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [searchLng, setSearchLng] = useState();
    const [searchLat, setSearchLat] = useState();

    const handleSearch = (query) => {
        // const response = fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'}`);
        // const data = response.json();
        // const features = data.features;
        // if (features.length > 0) {
        //     const feature = features[0];
        //     setSearchLng(feature.center[0]);
        //     setSearchLat(feature.center[1]);
        // }
        const filtered = listings.filter((listing) => {
          return listing.address.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredListings(filtered);
    };

    useEffect(() => {
        api.getAllListings().then((data) => {
            setListings(data.data);
        })
    }, []);

    useEffect(() => {
        if (!mapContainer.current) return;

        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lng, lat],
                zoom: zoom
            }).addControl(
                new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl
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
                    
                    // map.current.addSource('points', {
                    //     'type': 'geojson',
                    //     'data': {
                    //         'type': 'FeatureCollection',
                    //         'features': [
                    //             {
                    //                 'type': 'Feature',
                    //                 'geometry': {
                    //                     'type': 'Point',
                    //                     'coordinates': [
                    //                         lng, lat
                    //                     ]
                    //                 },
                    //                 'properties': {
                    //                     'title': '$30'
                    //                 }
                    //             },
                    //             {
                    //                 'type': 'Feature',
                    //                 'geometry': {
                    //                     'type': 'Point',
                    //                     'coordinates': [
                    //                         -76.6188, 39.3339
                    //                     ]
                    //                 },
                    //                 'properties': {
                    //                     'title': '$30'
                    //                 }
                    //             }
                    //         ]
                    //     }
                    // });

                    const features = listings.map((listing) => {
                        console.log(listing.longitude);
                        console.log(listing.latitude);
                        console.log(listing.pricing);
                        return {
                          'type': 'Feature',
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [
                              listing.longitude,
                              listing.latitude
                            ]
                          },
                          'properties': {
                            'title': `$${listing.pricing}`
                          }
                        }
                    });

                    map.current.addSource('points', {
                        'type': 'geojson',
                        'data': {
                          'type': 'FeatureCollection',
                          'features': features
                        }
                    });
    
                    map.current.addLayer({
                        'id': 'points',
                        'type': 'symbol',
                        'source': 'points',
                        'layout': {
                            'icon-image': 'custom-marker',
                            'text-field': ['get', 'title'],
                            'text-font': [
                                'Open Sans Semibold',
                                'Arial Unicode MS Bold'
                            ],
                            'text-offset': [0, 1.25],
                            'text-anchor': 'top'
                        }
                    });
                }
            );
        });
    }, [listings]);

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <Wrapper>
            <ListingSearchBar onSearch={handleSearch} />
            <ListingWrapper>
                <Sidebar>
                    <ListingList listings={filteredListings} />
                </Sidebar>
            </ListingWrapper>
            <MapWrapper>
                <MapContainerStyle ref={mapContainer} />
            </MapWrapper>
        </Wrapper>
    );
}

export default Map;