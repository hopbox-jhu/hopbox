import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { MapContainerStyle, Sidebar } from "./Map";


mapboxgl.accessToken = 'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGV3OTIwNWswMWd3M3dubndwNnExNmRkIn0.125SegSukG2kDD3rXNdEkA';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-76.620277);
    const [lat, setLat] = useState(39.328888);
    const [zoom, setZoom] = useState(14);
    const [listings, setListings] = useState([]);

    useEffect(() => {
        if (map.current) return; // initialize map only once
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
        
        map.current.on('load', () => {
            // Add an image to use as a custom marker
            map.current.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                (error, image) => {
                    if (error) throw error;
                    map.current.addImage('custom-marker', image);
                    fetch('/listings')
                        .then(res => res.json())
                        .then(data => {
                            setListings(data.data);

                            // Create a GeoJSON source with all the listings
                            const geojson = {
                                type: 'FeatureCollection',
                                features: data.data.map(listings => ({
                                    type: 'Feature',
                                    geometry: {
                                        type: 'Point',
                                        coordinates: [listings.longitude, listings.latitude]
                                    },
                                    properties: {
                                        title: listings.pricing
                                    }
                                }))
                            };

                            // Add the GeoJSON source and layer for the markers
                            map.current.addSource('points', {
                                type: 'geojson',
                                data: geojson
                            });

                            map.current.addLayer({
                                id: 'points',
                                type: 'symbol',
                                source: 'points',
                                layout: {
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
                        })
                        .catch(error => console.log(error));
                    // Add a GeoJSON source with 1 point
                    map.current.addSource('points', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': [
                                {
                                    // feature for JHU
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [        //will need to GET coordinates from database
                                            lng, lat
                                        ]
                                    },
                                    'properties': {
                                        'title': 'JHU'
                                    }
                                }
                            ]
                        }
                    });
    
                    // Add a symbol layer
                    map.current.addLayer({
                        'id': 'points',
                        'type': 'symbol',
                        'source': 'points',
                        'layout': {
                            'icon-image': 'custom-marker',
                            // get the title name from the source's "title" property
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
      });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <>
        <div>
            {listings.map((listing) => (
                <div key={listing._id}>
                    <h2>{listing.hostID}</h2>
                    <p>{listing.description}</p>
                </div>
            ))}
        </div>
        <div>
            <MapContainerStyle ref={mapContainer}/>
        </div>
        </>
    );
}

export default Map;