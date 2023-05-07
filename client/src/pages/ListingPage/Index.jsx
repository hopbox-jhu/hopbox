import React, { useState, useEffect } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
// import { Wrapper, Header, LeftContainer, RightContainer, Container } from "../../components/listing/listingComponents";
import { Header, Container, LeftContainer, RightContainer, Form, PricingBox } from './ListingPage';
import { Link, useParams } from "react-router-dom";
import * as api from "../../api";
import logo from "/src/assets/logo.png";


function ListingPage() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await api.getListingById(id);
            setData(result);
        }
        fetchData();
    }, []);

    if (data) {
        return (
            <div>
            <Header>
            <img src={logo} alt="Logo" />
            </Header>

            <Container>
                <LeftContainer>
                <Image src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=720&amp;q=80" 
                    height="60vh" width="40vw" radius="lg"  />
                <div style={{ marginTop: 30 }}>
                    <label>{data.address}</label>
                </div>
                </LeftContainer>
                <RightContainer>
                <Form>
                <label>About</label>
                    <Group position="left" mt="md" mb="xs">
                        <Badge size="lg" color="pink" variant="light">
                            {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
                        </Badge>
                        <Badge size="lg" color="pink" variant="light">
                            {`${data.length} * ${data.width}${data.height != null ? ` * ${data.height} ft` : ' ft'}`}
                        </Badge>
                    </Group>
                
                    <div style={{ marginTop: 30 }}>
                    <Text align="left" size="sm" color="dimmed" >
                    {data.description.length > 180 ? data.description.slice(0, 180) + "..." : data.description}
                    </Text>
                    </div>
                </Form>
                <Form>
                <label>Pricing</label>
                <div style={{ alignContent: "center" }}>
                <PricingBox>
                    <div className="subtotal">Subtotal</div>
                    <div className="price-per-month">${data.pricing}</div>
                    <div className="service-fee">Service Fee (20%)</div>
                    <div className="service-fee-amount">${data.pricing * 0.2}</div>
                    <div className="total">Total</div>
                    <div className="total-amount">${data.pricing * 1.2 }</div>
                </PricingBox>
                <Link to={`/application/${id}`}>
                        <Button align="left" variant="light" color="pink" fullWidth radius="lg">
                        Book Now
                        </Button>
                    </Link>
                </div>
                </Form>
                </RightContainer>
            </Container>


            <div>




            </div>
            </div>


        );
    }
}

export default ListingPage;
