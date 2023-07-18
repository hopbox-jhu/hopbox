import React, { useState, useEffect } from "react";
import { Text, Badge, Button, Group } from '@mantine/core';
import { Card as StyledCard, Subtitle } from './applicationComponents';
import * as api from "../../api";

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

export function Application({ applicationID, renterID, listingID, startDate, endDate, items, needs, accepted }) {

  const [acceptedData, setAcceptedData] = useState(accepted);
  const [renter, setRenter] = useState(null);
  const [data, setData] = useState(null);
  const [host, setHost] = useState(null);

  useEffect(() => {
    async function fetchRenter() {
      try {
        const data = await api.getUser(renterID);
        setRenter(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRenter();
    async function fetchData() {
      const result = await api.getListingById(listingID);
      setData(result);
      async function fetchHost() {
        const host = await api.getUser(result.hostID);
        setHost(host.data);
      }
      fetchHost();
    }
    fetchData();
  }, []);

  const handleAccept = async (event) => {
    setAcceptedData("true");
    await api.acceptApplication(listingID, applicationID);
  }

  const handleReject = async (event) => {
    setAcceptedData("false");
    await api.rejectApplication(applicationID);
  }

  if (renter && data && host) {
    return (
      <Card>
        <Group position="left" mt="md" mb="xs">
          {renterID == localStorage.getItem("email") ?
            <>
              <LabeledBadge label="Host" value={host.email} />
              <LabeledBadge label="Host Phone Number" value={host.phone} />
            </>
            :
            <>
              <LabeledBadge label="Renter" value={renterID} />
              <LabeledBadge label="Renter Phone Number" value={renter.phone} />
            </>
          }

          <LabeledBadge label="Start date" value={startDate} />
          <LabeledBadge label="End date" value={endDate} />
          <LabeledBadge label="Items" value={`${items}`} />
          <LabeledSubtitle label="Needs" value={needs} />
          <div style={{ display: "flex", justifyContent: "space-between", gap: "5px", width: "70%" }}>
            {renterID == localStorage.getItem("email") ?
              <>
                {acceptedData == null ?
                  <Text style={{ backgroundColor: "#EB65A0", color: "white", border: "2px solid #EB65A0", borderRadius: "10px", padding: "7px" }}>Pending</Text>
                  :
                  <Text style={{ backgroundColor: "#EB65A0", color: "white", border: "2px solid #EB65A0", borderRadius: "10px", padding: "7px" }}>{acceptedData == "true" ? "Accepted" : "Declined"}</Text>
                }
              </>
              :
              <>
                {acceptedData == null ?
                  <>
                    <Button onClick={handleAccept} style={{ backgroundColor: "#EB65A0" }}>Accept</Button>
                    <Button onClick={handleReject} style={{ backgroundColor: "#fff", color: "#EB65A0", border: "2px solid #EB65A0" }}>Decline</Button>
                  </>
                  :
                  <Text style={{ backgroundColor: "#EB65A0", color: "white", border: "2px solid #EB65A0", borderRadius: "10px", padding: "7px" }}>{acceptedData == "true" ? "Accepted" : "Declined"}</Text> //style this
                }
              </>
            }
          </div>
        </Group>
      </Card>
    );
  }
}
