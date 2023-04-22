import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Input } from '@mantine/core';
import axios from "axios";

function PopupForm() {
    const [opened, { open, close }] = useDisclosure(false);
    const [values, setValues] = useState({
        email: localStorage.getItem("email"),
        bio: localStorage.getItem("bio"),
        address: localStorage.getItem("address"),
        school: localStorage.getItem("school"),
        occupation: localStorage.getItem("occupation")
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const { bio, address, school, occupation } = values;

        localStorage.setItem("bio", bio);
        localStorage.setItem("address", address);
        localStorage.setItem("school", school);
        localStorage.setItem("occupation", occupation);
        // Make API call to update user data in MongoDB
        //TODO: need to post to mongodb right here

        close();
        window.location.reload();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return (
        <>
            <Modal opened={opened} onClose={close} title="Edit Profile" centered>
                <form onSubmit={handleSubmit}>
                    <label>
                        Bio
                        <Input
                            name="bio"
                            defaultValue={values.bio}
                            required
                            requiredErrorMessage="Bio is required"
                            variant="unstyled"
                            style={{
                                display: "block",
                                border: "1px solid #ccc",
                                padding: "5px",
                                borderRadius: "5px",
                                width: "100%",
                                boxSizing: "border-box"
                            }}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Address
                        <Input
                            name="address"
                            defaultValue={values.address}
                            required
                            requiredErrorMessage="Address is required"
                            variant="unstyled"
                            style={{
                                display: "block",
                                border: "1px solid #ccc",
                                padding: "5px",
                                borderRadius: "5px",
                                width: "100%",
                                boxSizing: "border-box"
                            }}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        School/College
                        <Input
                            name="school"
                            defaultValue={values.school}
                            required
                            requiredErrorMessage="School/College is required"
                            variant="unstyled"
                            style={{
                                display: "block",
                                border: "1px solid #ccc",
                                padding: "5px",
                                borderRadius: "5px",
                                width: "100%",
                                boxSizing: "border-box"
                            }}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Occupation
                        <Input
                            name="occupation"
                            defaultValue={values.occupation}
                            required
                            requiredErrorMessage="Occupation is required"
                            variant="unstyled"
                            style={{
                                display: "block",
                                border: "1px solid #ccc",
                                padding: "5px",
                                borderRadius: "5px",
                                width: "100%",
                                boxSizing: "border-box"
                            }}
                            onChange={handleChange}
                        />
                    </label>

                    <Button style={{ backgroundColor: '#E91E63', color: '#fff' }} type="submit">Submit</Button>
                </form>



            </Modal>

            <Group position="center">
                <Button onClick={open} style={{ padding: '0.5rem 1rem', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#E91E63', color: '#fff', borderRadius: '4px', cursor: 'pointer', border: 'none', marginTop: '1rem' }}>Edit Profile</Button>
            </Group>
        </>
    );
}

export default PopupForm;
