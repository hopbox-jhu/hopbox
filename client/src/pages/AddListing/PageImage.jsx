import React from 'react';
import { Form, Label, SizeLabel, Input } from './AddListing';
import { Avatar } from '@mantine/core'

function PageImage(props) {
    const images = props.images;
    const setImages = props.setImages;
    const file = props.file;
    const setFile = props.setFile;

    return (
        <div>
            <Form>
                <Label htmlFor="images">Add images</Label>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <SizeLabel htmlFor="length">Images</SizeLabel>
                        <Avatar radius="md" size={160} src={images} />
                        <input
                            type="file"
                            className="Upload__Input"
                            onChange={(event) => {
                                const file = event.target.files[0]
                                const url = URL.createObjectURL(file)
                                setFile(file)
                                setImages(url)
                            }}
                        />
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default PageImage;
