import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Input } from '@mantine/core';
import * as postApi from "../../api/index";

function PopupForm() {
    const [opened, { open, close }] = useDisclosure(false);
    const [values, setValues] = useState({
        email: localStorage.getItem("email"),
        bio: localStorage.getItem("bio"),
        address: localStorage.getItem("address"),
        school: localStorage.getItem("school"),
        occupation: localStorage.getItem("occupation"),
        phone: localStorage.getItem("phone")
    });

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const { bio, address, school, occupation, phone } = values;
            localStorage.setItem("bio", bio);
            localStorage.setItem("address", address);
            localStorage.setItem("school", school);
            localStorage.setItem("occupation", occupation);
            localStorage.setItem("phone", phone);
            const email = localStorage.getItem("email");
            const user = await postApi.updateUser(email, bio, address, school, occupation, phone);
            if (user) {
                alert("Successfully edited profile.");
            }
            close();
            window.location.reload();
        } catch (err) {
            console.log(err);
            console.log(err.message);
        }

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
            <Modal opened={opened} onClose={close} title="Edit Profile" centered padding="10px">
                <form onSubmit={handleSubmit}>
                    <label style={{ marginBottom: '1rem !important' }}>
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

                    <label style={{ marginBottom: '1rem' }}>
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

                    <label>
                        Phone number
                        <Input
                            name="phone"
                            defaultValue={values.phone}
                            required
                            requiredErrorMessage="Phone number is required"
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

                    <Group padding="5px">
                    <Button style={{ backgroundColor: '#EB65A0', color: '#fff'}} type="submit">Submit</Button>
                    </Group>
                </form>



            </Modal>

            <Group position="center" padding="5px">
                <Button onClick={open} style={{ padding: '0.5rem 1rem', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#EB65A0', color: '#fff', borderRadius: '4px', cursor: 'pointer', border: 'none', marginTop: '1rem' }}>Edit Profile</Button>
            </Group>
        </>
    );
}

export default PopupForm;
