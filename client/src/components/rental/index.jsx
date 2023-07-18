import React, { useState, useEffect } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Divider, Wrapper, Heading, Subtitle } from './rentalComponents';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import * as api from "../../api";

export function Rental({ listingId, name, address, type, price, images, description, length, width, height, rentalStart, rentalEnd }) {

    const [data, setData] = useState(null);
    const [host, setHost] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await api.getListingById(listingId);
            setData(result);
            async function fetchHost() {
                const host = await api.getUser(result.hostID);
                setHost(host.data);
            }
            fetchHost();
        }
        fetchData();
    }, []);

    const navigate = useNavigate();

    const handleNavigate = (event) => {
        navigate(`/listing/${listingId}`);
    }

    if (data && host) {
        return (
            <Card onClick={handleNavigate} style={{ marginBottom: "3vh", height: "30vh", alignItem: "center", justifyContent: "center" }} shadow="lg" radius="lg" withBorder>
                <Divider>
                    <Image src={"https://hopbox-web-service.onrender.com/image/" + images[0]}
                        height="25vh" width="15vw" radius="lg" style={{ maxWidth: "100%" }} />
                    <Wrapper>
                        <Heading align="left" weight={500} size="lg">{name}</Heading>
                        <Heading align="left" weight={500} size="lg">{address}</Heading>
                        <Group position="left" mt="md" mb="xs">
                            <Badge size="sm" color="pink" variant="light">
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </Badge>
                            <Badge size="sm" color="pink" variant="light">
                                Start date : {rentalStart}
                            </Badge>
                            <Badge size="sm" color="pink" variant="light">
                                End date : {rentalEnd}
                            </Badge>
                            <Badge size="sm" color="pink" variant="light">
                                {`${length} * ${width}${height != null ? ` * ${height} ft` : ' ft'}`}
                            </Badge>
                            <Badge size="sm" color="pink" variant="light">
                                ${price}
                            </Badge>
                        </Group>
                        <Subtitle align="left" size="sm" color="dimmed" >
                            Host: {data.hostID}
                        </Subtitle>
                        <Subtitle align="left" size="sm" color="dimmed" >
                            Host Phone Number: {host.phone}
                        </Subtitle>
                        <br></br>
                        <Subtitle align="left" size="sm" color="dimmed">
                            {description.length > 180 ? description.slice(0, 180) + "..." : description}
                        </Subtitle>
                    </Wrapper>
                </Divider>
            </Card>
        );
    }
}