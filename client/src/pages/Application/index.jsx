import React, { useState } from "react";
import * as api from "../../api";
import { Heading, Form, Label, Input, Button, GiantInput } from "./Application";
import mapboxgl from 'mapbox-gl';
import { Group, Checkbox, Anchor } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import CreditCardInput from 'react-credit-card-input';

function Application() {
  const [daterange, setDateRange] = useState([null, null]);
  const [hazardcheck, setHazardCheck] = useState(false);
  const [items, setItems] = useState("");
  const [needs, setNeeds] = useState("");
  const [protection, setProtection] = useState(true);
  const [creditCard, setCreditCard] = useState({
    cardNumber: "",
    cvc: "",
    expiry: "",
    name: "",
    address: ""
  });
  const [agreement, setAgreement] = useState(false);

  const applicationData = {
    hostID: "ha",
    renterID: "he",
    listingID: "listing",
    startDate: daterange[0],
    endDate: daterange[1],
    hazardCheck: hazardcheck,
    items: items,
    needs: needs,
    protectionPlan: protection,
    creditCard: creditCard,
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCreditCard((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
    
  const handleSubmit = async (event) => {
    if (!daterange) {
      alert("You need to select a duration of your storage")
    }
    if (agreement){
      console.log(applicationData);
      event.preventDefault();
      const response = await api.createApplication(applicationData);
      alert("Successfully Submit Application")
    } else {
      alert("Please Read the Terms and Conditions")
    }
  };




  return (
    <div>
        <Heading>Application</Heading>
        <Form onSubmit={handleSubmit}>
        <Label htmlFor="type">Fill out the Application for this space?</Label>

          <Label htmlFor="date">When do you need Storage?</Label>
          <Group position="center">
            <DatePicker type="range" value={daterange} onChange={setDateRange} />
          </Group>
            
          <Label htmlFor="hazardcheck">Before providing further information about your belongings, please ensure that you select 'No' for all the items listed below. </Label>
          <select id="type" value={hazardcheck} onChange={(event) => setHazardCheck(event.target.value === 'true')}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

            <Label htmlFor="items">What are you storing?</Label>
            <Input
            id="address"
            type="text"
            placeholder="Items"
            value={items}
            onChange={(event) => setItems(event.target.value)}
            />

            <Label htmlFor="description">Describe your needs. A summary helps host know what to expect.</Label>
            <GiantInput
            id="description"
            type="text"
            placeholder="I need good storage near campus."
            value={needs}
            onChange={(event) => setNeeds(event.target.value)}
            />

            <Label htmlFor="insurance">Choose A Protection Plan</Label>
            <Checkbox checked={protection} onChange={(event) => setProtection(event.currentTarget.checked)} label = "Standard Protection PLan" />
            <Checkbox checked={!protection} onChange={(event) => setProtection(event.currentTarget.checked)} label = "No Protection PLan" />

            <Label htmlFor="creditcard">Credit Card Information</Label>
            <Input
              id="name"
              type="text"
              placeholder="Name on Card"
              value={creditCard.name}
              onChange={handleInputChange}
            />
            <Input
              id="address"
              type="text"
              placeholder="Address"
              value={creditCard.address}
              onChange={handleInputChange}
            />
            <CreditCardInput
              cardNumberInputProps={{
                value: creditCard.cardNumber,
                onChange: handleInputChange,
                id: "cardNumber",
              }}
              cardExpiryInputProps={{
                value: creditCard.expiry,
                onChange: handleInputChange,
                id: "expiry",
              }}
              cardCVCInputProps={{
                value: creditCard.cvc,
                onChange: handleInputChange,
                id: "cvc",
              }}
              fieldClassName="input"
            />

            <Checkbox checked={agreement} onChange={(event) => setAgreement(event.currentTarget.checked)} label = {<>
                I accept{' '}
                <Anchor href="https://mantine.dev" target="_blank">
                  terms and conditions
                </Anchor>
            </>} />
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    </div>
  );
}

export default Application;