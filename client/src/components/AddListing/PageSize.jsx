import React from 'react';
import { Form, Label, Input } from './AddListing';

function PageSize(props) {
    const length = props.length;
    const setLength = props.setLength;
    const width = props.width;
    const setWidth = props.setWidth;
    const height = props.height;
    const setHeight = props.setHeight;
    
    const handleLengthChange = (event) => {
      setLength(event.target.value);
      // const lengthAsNumber = Number(length);
      // if (isNaN(lengthAsNumber)) {
      //   alert("Please enter a number value for the length field.");
      // }
    }

    const handlethWidthChange = (event) => {
      setWidth(event.target.value);
      // const widthAsNumber = Number(width);
      // if (isNaN(widthAsNumber)) {
      //   alert("Please enter a number value for the width field.");
      // }
    }

    const handleHeightChange = (event) => {
      setHeight(event.target.value);
      // const heightAsNumber = Number(height);
      // if (height != null && isNaN(heightAsNumber)) {
      //   alert("Please enter a number value for the height field.");
      // }
    }

    return (
      <div>
        <Form>
          <Label htmlFor="length">Approximately how big is your space?</Label>
              <Label htmlFor="length">Length (feet)</Label>
              <Input
              id="length"
              type="text"
              placeholder="5 feet"
              value={length}
              onChange={handleLengthChange}
              />
              <Label htmlFor="width">Width (feet)</Label>
              <Input
              id="width"
              type="text"
              placeholder="6 feet"
              value={width}
              onChange={handlethWidthChange}
              />
              <Label htmlFor="height">Height (optional)</Label>
              <Input
              id="height"
              type="text"
              placeholder="9 feet"
              value={height}
              onChange={handleHeightChange}
              />
        </Form>
      </div>
    )
  }

  export default PageSize;