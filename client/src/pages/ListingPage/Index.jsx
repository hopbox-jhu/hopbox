import React, { useState, useEffect } from "react";
import { Image, Text, Badge, Button, Group } from '@mantine/core';
import { Container, LeftContainer, RightContainer, Form, PricingBox, MainContent, Address } from './ListingPage';
import * as api from "../../api";
import { useNavigate, useParams } from 'react-router-dom';
import { List } from "@material-ui/core";
import { Application } from "../../components/application"
import MainNavBar from "../../components/MainNavBar";


function ListingPage() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [applications, setApplications] = useState([]);
    const [host, setHost] = useState(null);
    const navigate = useNavigate();
    const listingID = id;

    useEffect(() => {
        async function fetchData() {
            const result = await api.getListingById(listingID);
            setData(result);
            async function fetchHost() {
                const host = await api.getUser(result.hostID);
                setHost(host.data);
            }
            fetchHost();
        }
        fetchData();
        async function fetchApplications() {
            try {
                const data = await api.getApplicationsByListingId(listingID);
                setApplications(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchApplications();
    }, []);

    const handleSubmit = () => {
        navigate(`/application/${listingID}`);
    };

    if (data && host) {
        return (
            <div>
                <MainNavBar />
                <MainContent>
                    <Container>
                        <LeftContainer>
                            <Group position="center" style={{ flexDirection: "row" }}>
                                {data.images.length >= 2 && (
                                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                                        {data.images.slice(0, 4).map((image, index) => (
                                            <Image
                                                key={index}
                                                src={"http://localhost:5050/image/" + image}
                                                height="25vh"
                                                width="15vw"
                                                radius="lg"
                                                style={{ maxWidth: "100%", marginRight: "1rem", marginBottom: "1rem" }}
                                            />
                                        ))}
                                    </div>
                                )}
                                {data.images.length === 1 && (
                                    <Image
                                        src={"http://localhost:5050/image/" + data.images[0]}
                                        height="25vh"
                                        width="15vw"
                                        radius="lg"
                                        style={{ maxWidth: "100%" }}
                                    />
                                )}
                            </Group>
                            <div width="15vw" style={{ marginTop: 30 }}>
                                <Address>{data.name}</Address>
                            </div>
                        </LeftContainer>
                        <RightContainer>
                            <Form>
                                <label>ABOUT</label>
                                <Group position="left" mt="md" mb="xs">
                                    <Badge size="lg" color="pink" variant="light">
                                        {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
                                    </Badge>
                                    <Badge size="lg" color="pink" variant="light">
                                        {`${data.length} * ${data.width}${data.height != null ? ` * ${data.height} ft` : ' ft'}`}
                                    </Badge>
                                </Group>

                                <div style={{ marginTop: 30 }}>
                                    <Text align="left" size="xl" color="dimmed" >
                                        Host: {data.hostID}
                                    </Text>
                                    <Text align="left" size="xl" color="dimmed" >
                                        Host Phone Number: {host.phone}
                                    </Text>
                                    <br></br>
                                    <Text align="left" size="xl" color="dimmed" >
                                        Located on {data.address.substring(data.address.indexOf(" ") + 1, data.address.indexOf(",")).length > 180 ? data.address.substring(data.address.indexOf(" ") + 1, data.address.indexOf(",")).slice(0, 180) + "..." : data.address.substring(data.address.indexOf(" ") + 1, data.address.indexOf(","))}
                                    </Text>
                                    <br></br>
                                    <Text align="left" size="xl" color="dimmed" >
                                        Description: {data.description.length > 180 ? data.description.slice(0, 180) + "..." : data.description}
                                    </Text>
                                </div>
                            </Form>
                            <Form>
                                <label>PRICING PER MONTH</label>
                                <PricingBox>
                                    <div className="subtotal">Subtotal</div>
                                    <div className="price-per-month">${data.pricing.toFixed(2)}</div>
                                    <div className="service-fee">Service Fee (20%)</div>
                                    <div className="service-fee-amount">${(data.pricing * 0.2).toFixed(2)}</div>
                                    <div className="total">Total</div>
                                    <div className="total-amount">${(data.pricing * 1.2).toFixed(2)}</div>
                                </PricingBox>
                                {data.hostID !== localStorage.getItem("email") ? (
                                    <Button onClick={handleSubmit} align="left" variant="light" color="pink" fullWidth radius="lg">
                                        BOOK NOW
                                    </Button>
                                ) : <></>
                                }

                                {data.hostID == localStorage.getItem("email") ? (
                                    <div>
                                        <label>Applications</label>
                                        <List>
                                            {applications.map((application, index) => (
                                                <Application
                                                    key={application._id}
                                                    applicationID={application._id}
                                                    renterID={application.renterID}
                                                    listingID={listingID}
                                                    startDate={new Date(application.startDate).toLocaleDateString('en-US')}
                                                    endDate={new Date(application.endDate).toLocaleDateString('en-US')}
                                                    items={application.items}
                                                    needs={application.needs}
                                                    accepted={application.accepted}
                                                >
                                                    <div>{index + 1}. </div>
                                                </Application>
                                            ))}
                                        </List>
                                    </div>
                                ) : <></>}

                            </Form>
                        </RightContainer>
                    </Container>
                </MainContent>

            </div>
        );
    }
}

export default ListingPage;
