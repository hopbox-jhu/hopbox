import React, { useState } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Divider, Wrapper, Heading, Subtitle} from './applicationComponents';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function Application({ applicationId, startDate, endDate, items, needs }) {
      
    return (

        <Card style={{marginBottom:"3vh", height:"20vh", width:"60vw", alignItem:"center", justifyContent:"center"}} shadow="lg"  radius="lg" withBorder>
        <Divider>

        <Wrapper>
        <Heading align="left" weight={500} size="lg">Application</Heading>
        <Group position="left" mt="md" mb="xs">
            <Badge size="lg" color="pink" variant="light">
                {startDate}
            </Badge>
            <Badge size="lg" color="pink" variant="light">
                {endDate}
            </Badge>
            <Badge size="lg" color="pink" variant="light">
                ${items}
            </Badge>
        </Group>
        <Subtitle align="left" size="sm" color="dimmed">
        {needs}
        </Subtitle>
        </Wrapper>
        </Divider>
        </Card>
    );
}