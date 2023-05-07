import React, { useState } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Divider, Wrapper} from './listingComponents';
import { Link } from "react-router-dom";

export function Listing({ listingId, address, type, price, images, description, length, width, height }) {

    return (
        <Link to={`/listing/${listingId}`}>
        <Card style={{marginBottom:"15px", height:"24vh"}} shadow="lg" padding="lg" radius="lg" withBorder>
        <Divider>
            <Image src={"http://localhost:5050/image/" + images[0]} 
                height="18vh" width="10vw" radius="lg"  />
        <Wrapper>
        <Text align="left" weight={500} size="lg">{address}</Text>
        <Group position="left" mt="md" mb="xs">
            <Badge size="lg" color="pink" variant="light">
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
            <Badge size="lg" color="pink" variant="light">
                {`${length} . ${width}${height != null ? ` . ${height} ft` : ' ft'}`}
            </Badge>
            <Badge size="lg" color="pink" variant="light">
                ${price}
            </Badge>
        </Group>
        <Text align="left" size="sm" color="dimmed">
        {description.length > 180 ? description.slice(0, 180) + "..." : description}
        </Text>
        </Wrapper>
        </Divider>
        </Card>
        </Link>
    );
}