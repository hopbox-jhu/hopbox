import React from "react";
import { Card, Image, Badge, Group } from '@mantine/core';
import { Divider, Wrapper, Heading, Subtitle, Subtitle2 } from './listingComponents';
import { useNavigate } from 'react-router-dom';

export function Listing({ listingId, name, address, type, price, images, description, length, width, height, distance }) {
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    navigate(`/listing/${listingId}`);
  }

  address = address.substring(address.indexOf(" ") + 1, address.indexOf(","));
  distance = Math.ceil(distance);

  return (
    <Card onClick={handleNavigate} style={{ marginBottom: "30px", height: "300px", width: "700px", alignItem: "center", justifyContent: "center" }} shadow="lg" radius="lg" withBorder>
      <Divider>
        <Group position="center" style={{ flexDirection: "row" }}>
          {images.length >= 2 && (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {images.slice(0, 4).map((image, index) => (
                <Image
                  key={index}
                  src={"http://localhost:5050/image/" + image}
                  height="200px"
                  width="150px"
                  radius="lg"
                  style={{ maxWidth: "100%", marginRight: "1rem", marginBottom: "1rem" }}
                />
              ))}
            </div>
          )}
          {images.length === 1 && (
            <Image
              src={"http://localhost:5050/image/" + images[0]}
              height="250px"
              width="250px"
              radius="lg"
              style={{ maxWidth: "100%" }}
            />
          )}
        </Group>
        <Wrapper>
          <Heading align="left" weight={500}>{name.length > 50 ? name.slice(0, 50) + "..." : address}</Heading>
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
          <Subtitle2 align="left" color="dimmed">
            Located on {address.length > 100 ? address.slice(0, 100) + "..." : address}:
          </Subtitle2>
          <Subtitle align="left" color="dimmed">
            {description.length > 150 ? description.slice(0, 150) + "..." : description}
          </Subtitle>
        </Wrapper>
      </Divider>
    </Card>
  );
}
