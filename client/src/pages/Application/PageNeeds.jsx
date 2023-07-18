import React from 'react';
import { Form, Label, GiantInput } from './Application';

function PageNeeds(props) {
  const needs = props.needs;
  const setNeeds = props.setNeeds;

  const handleNeedsChange = (event) => {
    setNeeds(event.target.value);
  }

  return (
    <div>
      <Form>
        <Label htmlFor="description">Describe your needs. A summary helps host know what to expect.</Label>
        <GiantInput
          id="description"
          type="text"
          placeholder="I need good storage near campus."
          value={needs}
          onChange={handleNeedsChange}
        />
      </Form>
    </div>
  );
}

export default PageNeeds;