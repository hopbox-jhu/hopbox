import React from "react";
import { Card, Image, Badge, Group } from '@mantine/core';
import { Divider, Wrapper, Heading, Subtitle } from './listingComponents';
import { useNavigate } from 'react-router-dom';

export function Listing({ listingId, name, address, type, price, images, description, length, width, height, distance }) {
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    navigate(`/listing/${listingId}`);
  }

  address = address.substring(address.indexOf(" ") + 1, address.indexOf(","));
  distance = Math.ceil(distance);

  return (
    <Card onClick={handleNavigate} style={{ marginBottom: "3vh", height: "30vh", alignItem: "center", justifyContent: "center" }} shadow="lg" radius="lg" withBorder>
      <Divider>
        <Group position="center" style={{ flexDirection: "row" }}>
          {images.length >= 2 && (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {images.slice(0, 4).map((image, index) => (
                <Image
                  key={index}
                  src={"http://localhost:5050/image/" + image}
                  height="25vh"
                  width="15vw"
                  radius="lg"
                  style={{ maxWidth: "100%", marginRight: "1rem", marginBottom: "1rem" }}
                />
              ))}
            </div>
          )}
          {images.length === 1 && (
            <Image
              src={"http://localhost:5050/image/" + images[0]}
              height="25vh"
              width="15vw"
              radius="lg"
              style={{ maxWidth: "100%" }}
            />
          )}
        </Group>
        <Wrapper>
          <Heading align="left" weight={500} size="lg">{name}</Heading>
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
            {!Number.isNaN(distance)
              ?
              <Badge size="lg" color="pink" variant="light">
                Less than {distance} mile{distance > 1 ? "s" : ""} away
              </Badge>
              :
              <></>
            }
            
        </Group>
        <Subtitle align="left" size="sm" color="dimmed">
        Located on {address.length > 100 ? address.slice(0, 100) + "..." : address}:
        </Subtitle>
        <Subtitle align="left" size="sm" color="dimmed">
        {description.length > 100 ? description.slice(0, 100) + "..." : description}
        </Subtitle>
        </Wrapper>
      </Divider>
    </Card>
  );
}
