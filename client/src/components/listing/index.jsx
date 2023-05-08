import React, { useState } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Divider, Wrapper, Heading, Subtitle} from './listingComponents';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function Listing({ listingId, address, type, price, images, description, length, width, height }) {
    
    const navigate = useNavigate();

    const handleNavigate = (event) => {
        navigate(`/listing/${listingId}`);
      }
      
    return (

        <Card onClick = {handleNavigate} style={{marginBottom:"3vh", height:"30vh", alignItem:"center", justifyContent:"center"}} shadow="lg"  radius="lg" withBorder>
        <Divider>
            <Image src={"https://hopbox-web-service.onrender.com/image/" + images[0]}
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