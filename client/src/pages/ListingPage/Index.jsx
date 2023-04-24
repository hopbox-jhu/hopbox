import React, { useState, useEffect } from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Link, useParams } from "react-router-dom";
import { Divider, Wrapper } from "../../components/listing/listingComponents";
import * as api from "../../api";

function ListingPage() {
    const { id } = useParams();
    const [data, setData] = useState({});

    // const fetchData = async () => {
    //     const result = await api.getListingById(id);
    //     setData(result.data);
    // };

    // fetchData();

    useEffect(() => {
        console.log("inside useeffect")
        api.getListingById().then((data) => {
            // setData(data.data)
            console.log("INSIDE" + data.data)

        })
    }, []);

    console.log("THIS IS "+ data);


    return (
        <Card style={{marginBottom:"15px", height:"24vh"}} shadow="lg" padding="lg" radius="lg" withBorder>
        <Divider>
            <Image src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=720&amp;q=80" 
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
        <Link to={`/application/${id}`}>
        <Button align="left" variant="light" color="pink" fullWidth radius="md">
            Book Now
        </Button>

        </Link>
        </Wrapper>
        </Divider>
        </Card>
    );
}

export default ListingPage;
