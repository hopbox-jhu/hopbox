import React, { useState } from "react";
import { Form, Label, Input} from './AddListing';
import { Grid, Button, ButtonGroup, TextField } from '@material-ui/core';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import StairsIcon from '@mui/icons-material/Stairs';
import styled from 'styled-components';
import { AddressAutofill } from '@mapbox/search-js-react';


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
  const {type, setType, address, setAddress} = props;

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  // const handleAddressChange = (event) => {

  //   if (event.features) {
  //     setAddress(event.features[0].properties.full_address);
  //   }
  // }

  const handleTypeChange = (event) => {
    setType(event.target.id);
  };

  return (
    <div>
      <Form>
        <Label htmlFor="type">What type of space best describes your listing?</Label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px', justifyContent: 'center', marginBottom: '50px' }}>
          <TypeButton id="room" clicked={type === 'room' ? "true" : "false"} onClick={handleTypeChange} startIcon={<MeetingRoomIcon />}>
            Room
          </TypeButton>
          <TypeButton id="closet" clicked={type === 'closet' ? "true" : "false"} onClick={handleTypeChange} startIcon={<CheckroomIcon />}>
            Closet
          </TypeButton>
          <TypeButton id="basement" clicked={type === 'basement' ? "true" : "false"} onClick={handleTypeChange} startIcon={<StairsIcon />}>
            Basement
          </TypeButton>
          <TypeButton id="other" clicked={type === 'other' ? "true" : "false"} onClick={handleTypeChange} startIcon={<SpaceBarIcon />}>
            Other
          </TypeButton>
        </div>
        <Label htmlFor="address">Where is your space located?</Label>
        <Input
          id="address"
          type="text"
          placeholder="Address"
          value={address}
          onChange={handleAddressChange}>
        </Input>
        {/* <AddressAutofill onRetrieve={handleAddressChange} accessToken='pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'>
          <Input
            id="address"
            style={{ width: '31vw'  }}
            radius='md'
            size='xl'
            className='inputfield'
            type="text"
            placeholder="Address"
            value={address}
            autocomplete="street-address"
            onChange={handleAddressChange}
          />
        </AddressAutofill> */}
      </Form>
    </div>
  );
}

export default PageTypeAddress;
