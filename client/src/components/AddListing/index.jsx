import React, { useState } from "react";
import * as api from "../../api";
import { Heading, Form, Label, Input, Button, GiantInput } from "./AddListing";
import mapboxgl from 'mapbox-gl';

function AddListing() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {currentPage === 1 && <PageType />}
      {currentPage === 2 && <PageAddress />}
      {currentPage === 3 && <PageDescription />}
      {currentPage === 4 && <PageSize />}
      {currentPage === 5 && <PagePrice />}
      {currentPage === 6 && <PagePermission />}
      <button onClick={handleBack} disabled={currentPage === 1}>
        Back
      </button>
      <button onClick={handleNext} disabled={currentPage === 6}>
        Next
      </button>
    </div>
  );
  }

  // Type
  function PageType() {
    const [type, setType] = useState("room");
  
    const handleTypeChange = (event) => {
      setType(event.target.value);
    };
  
    return (
      <div>
          <Heading>Add Listing</Heading>
          <Form>
              <Label htmlFor="type">What type of space best describes your listing?</Label>
              <select id="type" value={type} onChange={handleTypeChange}>
                  <option value="room">Room</option>
                  <option value="closet">Closet</option>
                  <option value="basement">Basement</option>
                  <option value="other">Other</option>
              </select>
          </Form>
      </div>
    );
  }

  // Address
  function PageAddress() {
    const [type, setType] = useState("room");
    const [address, setAddress] = useState("");
  
    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!address) {
        alert("Please enter an address for your space.");
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
            description: "",
            images: [],
            length: 0,
            width: 0,
            height: 0,
            pricing: 0,
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
          <Form onSubmit={handleSubmit}>
              <Label htmlFor="address">Where is your space located?</Label>
              <Input
              id="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
              />
          </Form>
      </div>
    );
  }
  

  // Description
  function PageDescription() {
    const [description, setDescription] = useState("");
  
    const handleDescriptiomChange = (event) => {
      setDescription(event.target.value);
      if (!description) {
        alert("Please enter a description for your space.");
      }
    }

    return (
      <div>
        <Form>
            <Label htmlFor="description">Describe your space. A summary helps renters know what to expect.</Label>
            <GiantInput
            id="description"
            type="text"
            placeholder="Our room is clean, owned by JHU student, and provides 24/7 access. It is available for long-term storage. It is located within walking distance from Homewood Campus."
            value={description}
            onChange={handleDescriptiomChange}
            />
        </Form>
      </div>
    );
  }

  // Size
  function PageSize() {
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    const handleLengthChange = (event) => {
      setLength(event.target.value);
      const lengthAsNumber = Number(length);
      if (isNaN(lengthAsNumber)) {
        alert("Please enter a number value for the length field.");
      }
    }

    const handlethWidthChange = (event) => {
      setWidth(event.target.value);
      const widthAsNumber = Number(width);
      if (isNaN(widthAsNumber)) {
        alert("Please enter a number value for the width field.");
      }
    }

    const handleHeightChange = (event) => {
      setHeight(event.target.value);
      const heightAsNumber = Number(height);
      if (height != null && isNaN(heightAsNumber)) {
        alert("Please enter a number value for the height field.");
      }
    }

    return (
      <div>
        <Form>
          <Label htmlFor="length">Approximately how big is your space?</Label>
              <Label htmlFor="length">Length (feet)</Label>
              <Input
              id="length"
              type="text"
              placeholder="5 feet"
              value={length}
              onChange={handleLengthChange}
              />
              <Label htmlFor="width">Width (feet)</Label>
              <Input
              id="width"
              type="text"
              placeholder="6 feet"
              value={width}
              onChange={handlethWidthChange}
              />
              <Label htmlFor="height">Height (optional)</Label>
              <Input
              id="height"
              type="text"
              placeholder="9 feet"
              value={height}
              onChange={handleHeightChange}
              />
        </Form>
      </div>
    )
  }

  // Price
  function PagePrice() {
    const [pricing, setPricing] = useState();

    const handlePricingChange = (event) => {
      setPricing(event.target.value);
      const pricingAsNumber = Number(pricing);
      if (!pricing || isNaN(pricingAsNumber)) {
        alert("Please enter a number value for the pricing field.");
      }
    }

    return (
      <div>
          <Label htmlFor="pricing">How much would you like to charge renters on a monthly bases? A good recommendation for pricing would be to charge $1 per square foot. (in USD)</Label>
            <Input
            id="pricing"
            type="text"
            placeholder="$30"
            value={pricing}
            onChange={handlePricingChange}
            />
      </div>
    )
  }

  // Permission
  function PagePermission() {
    const [permission, setPermission] = useState();

    return (
      <div>
        <Form>
          <Label htmlFor="permission">Do you have the rights/permission to rent out this space?</Label>
          <input
          id="permission"
          type="checkbox"
          checked={permission}
          onChange={(event) => setPermission(event.target.checked)}
          />
          <span>I have the rights/permission to rent out this space and understand that if not, I may be held financially and legally liable for any damage, loss, or fees incurred.</span>
          <Button type="submit" onClick={handleSubmit}>Add listing</Button>
        </Form>
      </div>
    )


  }

  

function AddListing() {
  const [type, setType] = useState("room");
  const [address, setAddress] = useState("");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [description, setDescription] = useState("");
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [pricing, setPricing] = useState();
  const [permission, setPermission] = useState();


  const handleSubmit = async (event) => {
    event.preventDefault();

    const pricingAsNumber = Number(pricing);
    const lengthAsNumber = Number(length);
    const widthAsNumber = Number(width);
    const heightAsNumber = Number(height);

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
        <Form onSubmit={handleSubmit}>
            <Label htmlFor="type">What type of space best describes your listing?</Label>
            <select id="type" value={type} onChange={(event) => setType(event.target.value)}>
                <option value="room">Room</option>
                <option value="closet">Closet</option>
                <option value="basement">Basement</option>
                <option value="other">Other</option>
            </select>
            <Label htmlFor="address">Where is your space located?</Label>
            <Input
            id="address"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            />
            <Label htmlFor="description">Describe your space. A summary helps renters know what to expect.</Label>
            <GiantInput
            id="description"
            type="text"
            placeholder="Our room is clean, owned by JHU student, and provides 24/7 access. It is available for long-term storage. It is located within walking distance from Homewood Campus."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
            <Label htmlFor="length">Approximately how big is your space?</Label>
            <Label htmlFor="length">Length (feet)</Label>
            <Input
            id="length"
            type="text"
            placeholder="5 feet"
            value={length}
            onChange={(event) => setLength(event.target.value)}
            />
            <Label htmlFor="width">Width (feet)</Label>
            <Input
            id="width"
            type="text"
            placeholder="6 feet"
            value={width}
            onChange={(event) => setWidth(event.target.value)}
            />
            <Label htmlFor="height">Height (optional)</Label>
            <Input
            id="height"
            type="text"
            placeholder="9 feet"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            />
            <Label htmlFor="pricing">How much would you like to charge renters on a monthly bases? A good recommendation for pricing would be to charge $1 per square foot. (in USD)</Label>
            <Input
            id="pricing"
            type="text"
            placeholder="$30"
            value={pricing}
            onChange={(event) => setPricing(event.target.value)}
            />
            <Label htmlFor="permission">Do you have the rights/permission to rent out this space?</Label>
            <input
            id="permission"
            type="checkbox"
            checked={permission}
            onChange={(event) => setPermission(event.target.checked)}
            />
            <span>I have the rights/permission to rent out this space and understand that if not, I may be held financially and legally liable for any damage, loss, or fees incurred.</span>
            <Button type="submit" onClick={handleSubmit}>Add listing</Button>
        </Form>
    </div>
  );
}

export default AddListing;
