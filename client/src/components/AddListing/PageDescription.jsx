import React from 'react';
import { Form, Label, GiantInput } from './AddListing';

function PageDescription(props) {
    const description = props.description;
    const setDescription = props.setDescription;
  
    const handleDescriptiomChange = (event) => {
      setDescription(event.target.value);
      // if (!description) {
      //   alert("Please enter a description for your space.");
      // }
    }

    return (
      <div>
        <Form>
          <Label htmlFor="description">Describe your space. A summary helps renters know what to expect.</Label>
          <GiantInput
          id="description"
          type="text"
          placeholder="Our room is clean, owned by JHU student, and provides 24/7 access. It is available for long-term storage. It is located within walking distance from Homewood Campus."
          value={description}
          onChange={handleDescriptiomChange}
          />
        </Form>
      </div>
    );
  }
  
  export default PageDescription;