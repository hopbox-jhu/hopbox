import React from 'react';
import { Form, Label, SizeLabel, Input } from './AddListing';
import axios from 'axios';

function PageImage(props) {
    // const images = props.images;
    // const setImages = props.setImages;

    // const handleImagesChange = (event) => {
    //     const file = event.target.files[0];
    //     const formData = new FormData();
    //     formData.append('image', file);
    //     axios.post('http://localhost:5050/api/upload', formData).then((response) => {
    //       const imageUrl = response.data.imageUrl;
    //       setImages(imageUrl);
    //       console.log(images);
    //     });
    // };

    return (
        <div>
            <Form>
                <Label htmlFor="images">Add images</Label>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <SizeLabel htmlFor="length">Images</SizeLabel>
                        <Input
                            id="images"
                            type="file"
                            accept="image/*"
                            //onChange={handleImagesChange}
                        />
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default PageImage;
