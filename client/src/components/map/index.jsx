import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import { MapContainerStyle, Sidebar } from "./Map";


mapboxgl.accessToken = 'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGV3OTIwNWswMWd3M3dubndwNnExNmRkIn0.125SegSukG2kDD3rXNdEkA';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-76.620277);
    const [lat, setLat] = useState(39.328888);
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
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
        <div>
            <MapContainerStyle ref={mapContainer}/>
        </div>
    );
}

export default Map;