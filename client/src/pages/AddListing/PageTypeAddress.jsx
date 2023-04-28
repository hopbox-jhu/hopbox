import React, { useState } from "react";
import { Form, Label, Input} from './AddListing';
import { Grid, Button, ButtonGroup, TextField } from '@material-ui/core';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import StairsIcon from '@mui/icons-material/Stairs';
import styled from 'styled-components';
import { AddressAutofill } from '@mapbox/search-js-react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";


const TypeButton = styled(Button)`
  padding: 10px;
  font-size: 20px;
  border: #EB65A0;
  border-radius: 10px;
  margin-top: 5px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid ${props => props.clicked === "true" ? "pink" : "#EB65A0"};

  &:focus {
    outline: none;
    background-color: #EB65A0;
    color: white;
    border-color: white;
  }

  &.clicked {
    background-color: #EB65A0;
    color: white;
    border: "pink";
  }
  &:not(.clicked):hover {
    border: 2px solid pink;
    color: black;
  }
`;

function PageTypeAddress(props) {
  const { type, setType, address, setAddress } = props;
  const [inputValue, setInputValue] = useState(address);

  const handleAddressChange = (event) => {
    if (event.features) {
      setAddress(event.features[0].properties.full_address);
      setInputValue(event.features[0].properties.full_address);
    }
  }

  const handleTypeChange = (event) => {
    setType(event.target.defaultValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <Form>
        <Label htmlFor="type">What type of space best describes your listing?</Label>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="room"
            value={type}
            name="radio-buttons-group"
          >
            <FormControlLabel value="Room" onClick={handleTypeChange} control={<Radio />} label="Room" />
            <FormControlLabel value="Closet" onClick={handleTypeChange} control={<Radio />} label="Closet" />
            <FormControlLabel value="Basement" onClick={handleTypeChange} control={<Radio />} label="Basement" />
            <FormControlLabel value="Other" onClick={handleTypeChange} control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Label htmlFor="address">Where is your space located?</Label>
        <AddressAutofill onRetrieve={handleAddressChange} accessToken='pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'>
          <Input
            id="address"
            style={{ width: '31vw'  }}
            radius='md'
            size='xl'
            className='inputfield'
            type="text"
            placeholder="Address"
            autoComplete="off"
            name="no-autofill"
            onChange={handleInputChange}
            value={inputValue}
          />
        </AddressAutofill>
      </Form>
    </div>
  );
}

export default PageTypeAddress;
