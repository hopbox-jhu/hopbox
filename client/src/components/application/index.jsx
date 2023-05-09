import React from "react";
import { Image, Text, Badge, Button, Group } from '@mantine/core';
import { Card as StyledCard, Subtitle } from './applicationComponents';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// Define a style component for each badge with a label
const LabeledBadge = ({ label, value, ...props }) => (
  <Badge
    size="xl"
    color="pink"
    variant="light"
    style={{
      marginRight: "10px",
      height: "auto",
      width: "auto",
      maxWidth: "270px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
    {...props}
  >
    <Text size="sm" color="gray">
      {label}:
    </Text>{" "}
    {value}
  </Badge>
);

// Define a style component for each subtitle with a label
const LabeledSubtitle = ({ label, value, ...props }) => (
  <Subtitle
    align="left"
    size="sm"
    color="dimmed"
    style={{
      marginRight: "10px",
      height: "auto",
      width: "auto",
      maxWidth: "270px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
    {...props}
  >
    <Text size="sm" color="gray">
      {label}:
    </Text>{" "}
    {value}
  </Subtitle>
);

export function Card({ children }) {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
}

export function Application({ applicationId, startDate, endDate, items, needs }) {
  return (
    <Card>
      <Group position="left" mt="md" mb="xs">
        <LabeledBadge label="Start date" value={startDate} />
        <LabeledBadge label="End date" value={endDate} />
        <LabeledBadge label="Items" value={`${items}`} />
        <LabeledSubtitle label="Needs" value={needs} />
        <div style={{ display: "flex", justifyContent: "space-between", gap: "5px", width: "70%"}}>
          <Button style={{ backgroundColor: "#EB65A0" }}>Accept</Button>
          <Button style={{ backgroundColor: "#fff", color: "#EB65A0", border: "2px solid #EB65A0" }}>Decline</Button>
        </div>
      </Group>
    </Card>
  );
}
