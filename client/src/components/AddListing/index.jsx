import React, { useState } from "react";
import * as api from "../../api";
import { Heading } from "./AddListing";
import PageType from './PageType';
import PageAddress from "./PageAddress";
import PageDescription from "./PageDescription";
import PageSize from "./PageSize";
import PagePrice from "./PagePrice";
import PagePermission from "./PagePermission";

function AddListing() {
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState("room");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [pricing, setPricing] = useState();
  const [permission, setPermission] = useState(false);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();


  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    
    const pricingAsNumber = Number(pricing);
    const lengthAsNumber = Number(length);
    const widthAsNumber = Number(width);
    const heightAsNumber = Number(height);
    
    console.log(pricingAsNumber);
    console.log(lengthAsNumber);
    console.log(widthAsNumber);
    console.log(heightAsNumber);

    if (!permission) {
        alert("You must certify that you have the rights/permission to rent out this space.");
      } else if (!address) {
        alert("Please enter an address for you space.");
      } else if (!description) {
        alert("Please enter a description for your space.");
      } else if (!length || !width) {
        alert("Please enter an approximation for the dimensions of your space.");
      } else if (isNaN(lengthAsNumber)) {
        alert("Please enter a number value for the length field.");
      } else if (isNaN(widthAsNumber)) {
        alert("Please enter a number value for the width field.");
      } else if (height != null && isNaN(heightAsNumber)) {
        alert("Please enter a number value for the height field.");
      } else if (!pricing) {
        alert("Please enter a pricing for your space.");
      } else if (isNaN(pricingAsNumber)) {
        alert("Please enter a number value for the pricing field.");
      } else {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'}`);
        const data = await response.json();
        const features = data.features;
        if (features.length > 0) {
          const feature = features[0];
          setLongitude(feature.center[0]);
          setLatitude(feature.center[1]);
          
          const listing = {
            hostID: "jyu132",
            address: address,
            longitude: longitude,
            latitude: latitude,
            type: type,
            description: description,
            images: [],
            length: lengthAsNumber,
            width: widthAsNumber,
            height: heightAsNumber,
            pricing: pricingAsNumber,
            calendar: [],
            renterID: "",
          };
          try {
            const response = await api.createListing(listing);
            alert("Successfully added listing!");
          } catch (error) {
            alert("Error adding listing");
          }
        } else {
          alert("Address not found!");
        }
      }
  };


  return (
    <div>
      <Heading>Add Listing</Heading>
      {currentPage === 1 && <PageType type={type} setType={setType}/>}
      {currentPage === 2 && <PageAddress address={address} setAddress={setAddress} />}
      {currentPage === 3 && <PageDescription description={description} setDescription={setDescription} />}
      {currentPage === 4 && <PageSize length={length} setLength={setLength} width={width} setWidth={setWidth} height={height} setHeight={setHeight} />}
      {currentPage === 5 && <PagePrice pricing={pricing} setPricing={setPricing} />}
      {currentPage === 6 && <PagePermission permission={permission} setPermission={setPermission}/>}
      <button onClick={handleBack} disabled={currentPage === 1}>
        Back
      </button>
      <button onClick={handleNext} disabled={currentPage === 6}>
        Next
      </button>
      <button onClick={handleOnSubmit} disabled={currentPage !== 6}>
        Submit
      </button>
    </div>
  );
}

export default AddListing;
