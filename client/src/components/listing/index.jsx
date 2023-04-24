import React, { useState } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import {Divider, Wrapper} from './listingComponents';
import { Link } from "react-router-dom";

export function Listing({ listingId, address, type, price, description, length, width, height }) {

    return (
        <Link to={`/listing/${listingId}`}>
        <Card style={{marginBottom:"15px", height:"24vh"}} shadow="lg" padding="lg" radius="lg" withBorder>
        <Divider>
            <Image src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=720&amp;q=80" 
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
        <Link to="/application/${listingId}">
        <Button align="left" variant="light" color="pink" fullWidth radius="md">
            Book Now
        </Button>

        </Link>
        </Wrapper>
        </Divider>
        </Card>
        </Link>
    );
}