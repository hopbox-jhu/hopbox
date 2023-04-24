import React from 'react';
import { Form, Label, SizeLabel, Input } from './AddListing';

function PageImage(props) {
    const images = props.images;
    const setImages = props.setImages;
    
    const handleImagesChange = (event) => {
        setImages(event.target.files[0].name);
    }

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
                            onChange={handleImagesChange}
                        />
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default PageImage;
