import React, { useState, useEffect } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
// import { Wrapper, Header, LeftContainer, RightContainer, Container } from "../../components/listing/listingComponents";
import { Header, Container, LeftContainer, RightContainer } from './ListingPage';
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
                    height="36vh" width="20vw" radius="lg"  />
                <Text align="left" weight={500} size="lg">{data.address}</Text>
                </LeftContainer>
                <RightContainer>

                </RightContainer>
            </Container>


            <div>

            <Group position="left" mt="md" mb="xs">
                <Badge size="lg" color="pink" variant="light">
                    {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
                </Badge>
                <Badge size="lg" color="pink" variant="light">
                    {`${data.length} . ${data.width}${data.height != null ? ` . ${data.height} ft` : ' ft'}`}
                </Badge>
                <Badge size="lg" color="pink" variant="light">
                    ${data.pricing}
                </Badge>
            </Group>
            <Text align="left" size="sm" color="dimmed">
            {data.description.length > 180 ? data.description.slice(0, 180) + "..." : data.description}
            </Text>
            <Link to={`/application/${id}`}>
            <Button align="left" variant="light" color="pink" fullWidth radius="md">
                Book Now
            </Button>
            </Link>
            </div>
            </div>


        );
    }
}

export default ListingPage;
