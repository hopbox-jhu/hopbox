import React from 'react';
import { Form, Label } from './AddListing';

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
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value="room">Room</option>
          <option value="closet">Closet</option>
          <option value="basement">Basement</option>
        </select>
      </Form>
    </div>
  );
}

export default PageType;
