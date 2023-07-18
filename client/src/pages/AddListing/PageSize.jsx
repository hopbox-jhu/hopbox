import React from 'react';
import { Form, Label, SizeLabel, Input } from './AddListing';

function PageSize(props) {
  const length = props.length;
  const setLength = props.setLength;
  const width = props.width;
  const setWidth = props.setWidth;
  const height = props.height;
  const setHeight = props.setHeight;

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  }

  const handlethWidthChange = (event) => {
    setWidth(event.target.value);
  }

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  }

  return (
    <div>
      <Form>
        <Label htmlFor="length">Approximately how big is your space?</Label>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SizeLabel htmlFor="length">Length (ft)</SizeLabel>
            <Input
              id="length"
              type="text"
              placeholder="5 feet"
              value={length || ''}
              onChange={handleLengthChange}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SizeLabel htmlFor="width">Width (ft)</SizeLabel>
            <Input
              id="width"
              type="text"
              placeholder="6 feet"
              value={width || ''}
              onChange={handlethWidthChange}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SizeLabel htmlFor="height">Height (optional)</SizeLabel>
            <Input
              id="height"
              type="text"
              placeholder="9 feet"
              value={height || ''}
              onChange={handleHeightChange}
            />
          </div>
        </div>
      </Form>
    </div>
  )
}

export default PageSize;