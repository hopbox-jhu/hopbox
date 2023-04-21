import React from 'react';
import { Form, Label } from './Application';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const ProtectionButton = styled(Button)`
  padding: 10px;
  font-size: 20px;
  border: #EB65A0;
  border-radius: 10px;
  margin-top: 5px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid ${props => props.clicked ? "pink" : "#EB65A0"};
  text-align: left;
  text-transform: lowercase;

  &:first-of-type {
    margin-right: 40px;
  }

  &:focus {
    outline: none;
    background-color: #EB65A0;
    color: white;
    border-color: black;
  }

  &.clicked {
    background-color: ${props => props.clicked ? "#EB65A0" : "white"};
    color: ${props => props.clicked ? "white" : "black"};
    border: ${props => props.clicked ? "2px solid pink" : "2px solid #EB65A0"};
  }

  &:not(.clicked) {
    background-color: white;
    color: black;
    border: 2px solid #EB65A0;
  }

  &:hover {
    border: 2px solid pink;
    color: black;
    background-color: white;
  }
`;

function PageInsurance(props) {
  const protection = props.protection;
  const setProtection = props.setProtection;

  const handleButtonClick = (event) => {
    const buttonText = event.target.textContent;
    if (buttonText === 'No Protection Plan') {
      setProtection(false);
    } else {
      setProtection(!protection);
    }
  };

  return (
    <div>
      <Form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Label htmlFor="insurance">Choose a protection plan.</Label>
        </div>
        <div>
        <ProtectionButton classes={{ root: protection ? "clicked" : "" }} clicked={protection.toString()} onClick={handleButtonClick}>
            Standard Protection Plan
        </ProtectionButton>
        <ProtectionButton classes={{ root: !protection ? "clicked" : "" }} clicked={!protection ? 'true' : undefined} onClick={handleButtonClick}>
            No Protection Plan
        </ProtectionButton>
        </div>
      </Form>
    </div>
    
  );
}

export default PageInsurance;
