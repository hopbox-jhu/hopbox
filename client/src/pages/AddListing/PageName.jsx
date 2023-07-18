import React from "react";
import { Form, Label, Input } from './AddListing';

function PageName(props) {
  const { name, setName } = props;

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <Form>
        <Label htmlFor="name">Please provide a name for your space. We recommend a descriptive name for the location without the exact address. Ex: Large 5x5ft closet, 3 minute walk from JHU Homewood Campus</Label>
        <Input
          id="name"
          style={{ width: '31vw' }}
          radius='md'
          size='xl'
          className='inputfield'
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </Form>
    </div>
  );
}

export default PageName;
