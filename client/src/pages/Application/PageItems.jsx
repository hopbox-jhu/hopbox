import React from 'react';
import { Form, Label, Input} from './Application';

function PageItems(props) {
    const items = props.items;
    const setItems = props.setItems;
  
    const handleItemsChange = (event) => {
      setItems(event.target.value);
    }

    return (
      <div>
        <Form>
        <Label htmlFor="items">What are you storing?</Label>
            <Input
            id="address"
            type="text"
            placeholder="Items"
            value={items}
            onChange={handleItemsChange}
            />
        </Form>
      </div>
    );
  }
  
  export default PageItems;