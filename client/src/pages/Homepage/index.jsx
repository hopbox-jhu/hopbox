import React, { useRef, useEffect, useState } from "react";
import * as api from "../../api";
import { Divider, MapContainerStyle, Sidebar, Wrapper, Heading, Text1, Text2, Filter, FilterBar } from "./Homepage";
import { ListingList } from "../../components/listingList";
// import MainNavBar from "../../components/mainNavbar";
import appSidebar from '../../components/appSidebar';
import { Select, Switch } from "@mantine/core";
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw';

let distances = [];

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
  const [isOpen, setIsOpen] = useState(false);
  const [lng, setLng] = useState(-76.620277);
  const [lat, setLat] = useState(39.328888);
  const [zoom, setZoom] = useState(14);
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState(listings);
  const [availableOnly, setAvailableOnly] = useState(true);
  const [sorting, setSorting] = useState("Distance");
  const [priceFilter, setPriceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [address, setAddress] = useState("Johns Hopkins University");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = async (query) => {
    setAddress(query);
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`);
    const data = await response.json();
    const dataFeatures = data.features;
    var searchLng = 0;
    var searchLat = 0;
    if (dataFeatures.length > 0) {
      const feature = dataFeatures[0];
      searchLng = feature.center[0];
      searchLat = feature.center[1];
    }
    if (searchLng && searchLat) {
      setLng(searchLng);
      setLat(searchLat);
      setZoom(14);
      map.current.setCenter([searchLng, searchLat]);
    }
    if (sorting === "Distance") {
      sortListingsByDistance(listings, searchLng, searchLat);
    } else if (sorting === "Low Price") {
      sortListingsByPrice(listings);
    } else if (sorting === "High Price") {
      sortListingsByPriceReverse(listings);
    } else if (sorting === "Smallest") {
      sortListingsBySize(listings);
    } else if (sorting === "Largest") {
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
    if (priceFilter) {
      if (priceFilter == "Low") {
        filtered = filtered.filter(
          (listing) => listing.pricing >= 0 && listing.pricing <= 20
        );
      } else if (priceFilter == "Medium") {
        filtered = filtered.filter(
          (listing) => listing.pricing >= 20 && listing.pricing <= 50
        );
      } else if (priceFilter == "High") {
        filtered = filtered.filter(
          (listing) => listing.pricing > 50
        );
      }
    }
    if (typeFilter) {
      filtered = filtered.filter(
        (listing) => listing.type === typeFilter
      );
    }
    setFilteredListings(filtered);
    filteredListings.forEach((listing) => {
      distances.push(distance(lng, lat, listing.longitude, listing.latitude));
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getAllListings();
      const features = data.data.map((listing) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [listing.longitude + Math.random() * 0.003 - 0.0015, listing.latitude + Math.random() * 0.003 - 0.0015],
        },
        properties: {
          listingId: `${listing._id}`,
          name: `${listing.name}`,
          address: `${listing.address}`,
          type: `${listing.type}`,
          length: `${listing.length}`,
          width: `${listing.width}`,
          height: `${listing.height}`,
          pricing: `$${listing.pricing}`
        },
      }));

      setListings(data.data);

      if (!mapContainer.current) return;
      if (!map.current) {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom,
          attributionControl: false
        });
        var initialListings = data.data;
        sortListingsByDistance(initialListings, lng, lat);
        var filtered = initialListings.filter(
          (listing) => distance(listing.longitude, listing.latitude, lng, lat) <= 10
        );
        if (availableOnly) {
          filtered = filtered.filter(
            (listing) => listing.isRented == false
          );
        }
        setFilteredListings(filtered);
        filteredListings.forEach((listing) => {
          distances.push(distance(lng, lat, listing.longitude, listing.latitude));
        });
      }

      map.current.on('load', () => {
        map.current.loadImage(
          '/src/assets/images/marker.png',
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
                'icon-size': 0.3, //Marker size
                'text-field': ['get', 'pricing'],
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 1.25],
                'text-anchor': 'top',
              },
              paint: {
                'icon-color': 'pink', //Marker color
              },
            });

            map.current.on('click', (event) => {
              const features = map.current.queryRenderedFeatures(event.point, {
                layers: ['points']
              });
              if (!features.length) {
                return;
              }
              const feature = features[0];
              map.current.flyTo({ center: [feature.geometry.coordinates[0], feature.geometry.coordinates[1]] });

              new mapboxgl.Popup({ offset: [0, -35] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML(
                  `
                      <a href="/listing/${feature.properties.listingId}">
                      <div style="margin-bottom:15px; height:24vh; box-shadow:0px 0px 10px rgba(0,0,0,0.2); padding:24px; border-radius:10px; border:1px solid #ccc;">
                      <div>
                          <div style="display:inline-block; margin-left:24px;">
                              <h3 style="font-weight:500; font-size:24px;">${feature.properties.name}</h3>
                              <div style="margin-top:8px; margin-bottom:4px;">
                                  <span style="display:inline-block; background-color:pink; color:#fff; border-radius:8px; padding:6px 12px; font-size:18px; font-weight:bold; text-transform:capitalize;">
                                      ${feature.properties.type.charAt(0).toUpperCase() + feature.properties.type.slice(1)}
                                  </span>
                                  <span style="display:inline-block; background-color:pink; color:#fff; border-radius:8px; padding:6px 12px; font-size:18px; font-weight:bold; margin-left:8px;">
                                      ${feature.properties.length} . ${feature.properties.width}${feature.properties.height != null ? ` . ${feature.properties.height} ft` : ' ft'}
                                  </span>
                                  <span style="display:inline-block; background-color:pink; color:#fff; border-radius:8px; padding:6px 12px; font-size:18px; font-weight:bold; margin-left:8px;">
                                      ${feature.properties.pricing}
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  </a>
                      `
                )
                .addTo(map.current);
              // Ensure popup remains within the map bounds even when zooming out
              const mapBounds = map.current.getBounds();
              const popupBounds = popup.getBounds();
              if (!mapBounds.contains(popupBounds)) {
                const newLng = Math.max(Math.min(feature.geometry.coordinates[0], mapBounds.getEast()), mapBounds.getWest());
                const newLat = Math.max(Math.min(feature.geometry.coordinates[1], mapBounds.getNorth()), mapBounds.getSouth());
                popup.setLngLat([newLng, newLat]);
              }
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
    <>
    <appSidebar isOpen={isOpen} toggle={toggle}/>
    <Divider>
      {/* <MainNavBar onSearch={handleSearch} toggle={toggle} /> */}
      <Wrapper>
        <Heading>
          <Text1>
            Storage Near {address}
          </Text1>
          <Text2>
            50 + Spaces
          </Text2>
          <Filter className="filter" >
            <FilterBar>
              <Select
                style={{ width: '30%' }}
                radius="md"
                size="sm"
                placeholder="Sort by:"
                onChange={(event) => setSorting(event)}
                data={[
                  { value: 'Distance', label: 'Distance' },
                  { value: 'Low Price', label: 'Low Price' },
                  { value: 'High Price', label: 'High Price' },
                  { value: 'Smallest', label: 'Smallest' },
                  { value: 'Largest', label: 'Largest' },
                ]}
              />
              <Select
                style={{ width: '30%' }}
                radius="md"
                size="sm"
                placeholder="Filter by price"
                onChange={(event) => setPriceFilter(event)}
                data={[
                  { value: '', label: 'All' },
                  { value: 'Low', label: '$0-$20' },
                  { value: 'Medium', label: '$20-$50' },
                  { value: 'High', label: '$50+' },
                ]}
              />
              <Select
                style={{ width: '30%' }}
                radius="md"
                size="sm"
                placeholder="Filter by type"
                onChange={(event) => setTypeFilter(event)}
                data={[
                  { value: '', label: 'All' },
                  { value: 'Room', label: 'Room' },
                  { value: 'Closet', label: 'Closet' },
                  { value: 'Basement', label: 'Basement' },
                ]}
              />
            </FilterBar>
            <Switch
              labelPosition="left"
              style={{ marginLeft: "20px", marginTop: "20px", paddingBottom: "20px", fontSize: "30px", fontWeight: "100", lineHeight: "1.3" }}
              label="Only show currently available listings"
              color="pink"
              checked={availableOnly}
              onChange={(event) => setAvailableOnly(event.target.checked)}
            />
          </Filter>
        </Heading>
        <ListingList listings={filteredListings} distances={distances} />
        <MapContainerStyle ref={mapContainer} />
      </Wrapper>
    </Divider>
    </>
  );
}

export default Homepage;
