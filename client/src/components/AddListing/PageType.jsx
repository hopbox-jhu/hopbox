import React from 'react';
import { Form, Label } from './AddListing';
import styled from 'styled-components';


const TypeSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ff99cc;
  }
`;

function PageType(props) {
  const type = props.type;
  const setType = props.setType;

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <Form>
        <Label htmlFor="type">What type of space best describes your listing?</Label> 
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <TypeSelect id="type" value={type} onChange={handleTypeChange}>
            <option value="room">Room</option>
            <option value="closet">Closet</option>
            <option value="basement">Basement</option>
          </TypeSelect>
        </div>
      </Form>
    </div>
  );
}

export default PageType;
