import React from 'react';
import { Form, Label, SizeLabel } from './AddListing';
import { Avatar } from '@mantine/core';

function PageImage(props) {
  const images = props.images;
  const setImages = props.setImages;
  const setFile = props.setFile;

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const imageCount = Math.min(selectedFiles.length, 4);
    
    const newFiles = [];
    const newImages = [];

    for (let i = 0; i < imageCount; i++) {
      const file = selectedFiles[i];
      const imageUrl = URL.createObjectURL(file);
      
      newFiles.push(file);
      newImages.push(imageUrl);
    }

    setFile(newFiles);
    setImages(newImages);
  };

  return (
    <div>
      <Form>
        <Label htmlFor="images">Add images</Label>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SizeLabel htmlFor="length">Images</SizeLabel>
            {images.map((imageUrl, index) => (
              <Avatar key={index} radius="md" size={160} src={imageUrl} />
            ))}
            <input
              type="file"
              className="Upload__Input"
              onChange={handleFileChange}
              multiple
              accept="image/*"
              max="4"
            />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default PageImage;
