import React, { useState } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Divider, Wrapper, Heading, Subtitle} from './listingComponents';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function Listing({ listingId, address, type, price, description, length, width, height }) {
    
    const navigate = useNavigate();

    const handleNavigate = (event) => {
        navigate(`/listing/${listingId}`);
      }

    return (

        <Card onClick = {handleNavigate} style={{marginBottom:"3vh", height:"30vh", alignItem:"center", justifyContent:"center"}} shadow="lg"  radius="lg" withBorder>
        <Divider>
            <Image styles={{}} src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=720&amp;q=80" 
                height="25vh" width="15vw" radius="lg" style={{ maxWidth: "100%" }}  />
        <Wrapper>
        <Heading align="left" weight={500} size="lg">{address}</Heading>
        <Group position="left" mt="md" mb="xs">
            <Badge size="lg" color="pink" variant="light">
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
            <Badge size="lg" color="pink" variant="light">
                {`${length} * ${width}${height != null ? ` * ${height} ft` : ' ft'}`}
            </Badge>
            <Badge size="lg" color="pink" variant="light">
                ${price}
            </Badge>
        </Group>
        <Subtitle align="left" size="sm" color="dimmed">
        {description.length > 180 ? description.slice(0, 180) + "..." : description}
        </Subtitle>
        </Wrapper>
        </Divider>
        </Card>
    );
}