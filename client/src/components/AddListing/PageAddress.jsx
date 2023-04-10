import React from 'react';
import { Form, Label, Input } from './AddListing';

function PageAddress(props) {
    const address = props.address;
    const setAddress = props.setAddress;

    const handleAddressChange = async (event) => {
        setAddress(event.target.value);
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
