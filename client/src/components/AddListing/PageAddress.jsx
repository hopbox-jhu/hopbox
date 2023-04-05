import React from 'react';
import { Form, Label, Input } from './AddListing';

function PageAddress(props) {
    const address = props.address;
    const setAddress = props.setAddress;

    const handleAddressChange = async (event) => {
        setAddress(event.target.value);
        // if (!address) {
        //   alert("Please enter an address for your space.");
        // } else {
        //   const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'}`);
        //   const data = await response.json();
        //   const features = data.features;
        //   if (features.length <= 0) {
        //     alert("Address not found!");
        //   }
        // }
    };


    return (
        <div>
            <Form>
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

export default PageAddress;
