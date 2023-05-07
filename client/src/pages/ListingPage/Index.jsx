import React, { useState, useEffect } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Divider, Wrapper } from "../../components/listing/listingComponents";
import { Link, useParams } from "react-router-dom";
import * as api from "../../api";
import { useNavigate } from 'react-router-dom';

function ListingPage() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const result = await api.getListingById(id);
            setData(result);
        }
        fetchData();
    }, []);


    const handleSubmit = () => {
        navigate("/application/${id}");
        window.location.reload();
    };

    if (data) {
        return (
            <Divider>
                <Image src={"http://localhost:5050/image/" + data.images[0]}
                    height="18vh" width="10vw" radius="lg"  />
            <Wrapper>
            <Text align="left" weight={500} size="lg">{data.address}</Text>
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
            <Button onClick={handleSubmit} align="left" variant="light" color="pink" fullWidth radius="md">
                Book Now
            </Button>
            </Wrapper>
            </Divider>
        );
    }
}

export default ListingPage;
