import React, { useState } from "react";
import axios from "axios";
import { Heading, Form, Label, Input, Button, GiantInput } from "./AddListing";

function AddListing() {
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [pricing, setPricing] = useState("");
  const [permission, setPermission] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/addListing", { type, address, longitude, latitude, description, length, width, height, pricing, image });
      alert("Successfully added listing!");
    } catch (error) {
      alert("Error adding listing");
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
            <Label htmlFor="height">Height (feet)</Label>
            <Input
            id="height"
            type="text"
            placeholder="9 feet"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            />
            <Label htmlFor="pricing">How much would you like to charge renters on a monthly bases? (in USD)</Label>
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
            <Button type="submit">Add listing</Button>
        </Form>
    </div>
  );
}

export default AddListing;