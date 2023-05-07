import React, { useState, useParams, useEffect } from "react";
import * as api from "../../api";
import { Header, Heading, Form, Image, Label, Input, Button, GiantInput, Container, LeftContainer, RightContainer, ButtonContainer, BackButton, NextButton } from "./Application";
import { Checkbox, Anchor } from '@mantine/core';
import logo from "/src/assets/logo.png";
import boximg from "/src/assets/Box.png";
import PageDate from "./PageDate";
import PageHazardCheck from "./PageHazardCheck";
import PageItems from "./PageItems";
import PageNeeds from "./PageNeeds";
import PageInsurance from "./PageInsurance";
import PageCreditCard from "./PageCreditCard";
import { useNavigate } from 'react-router-dom';

function Application() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [hazardCheck, setHazardCheck] = useState(false);
  const [items, setItems] = useState("");
  const [needs, setNeeds] = useState("");
  const [protection, setProtection] = useState(true);
  const [creditCard, setCreditCard] = useState({
    cardNumber: "",
    cvc: "",
    expiry: "",
    name: "",
    address: ""
  });
  const [agreement, setAgreement] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  //const {listingID} = useParams();
  let applicationData = {
    hostID: "",
    renterID: localStorage.getItem("email"),
    listingID: "",
    startDate: dateRange[0],
    endDate: dateRange[1],
    hazardCheck: hazardCheck,
    items: items,
    needs: needs,
    protectionPlan: protection,
    creditCard: creditCard,
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCreditCard((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
    
  const handleSubmit = async (event) => {
    if (!dateRange) {
      alert("You need to select a duration of your storage")
    }
    if (agreement){
      console.log(applicationData);
      event.preventDefault();
      const response = await api.createApplication(applicationData);
      alert("Successfully Submit Application")
      navigate("/homepage");
    } else {
      alert("Please Read the Terms and Conditions")
    }
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <Container>
        <LeftContainer>
        <Image src={boximg} alt="Box" />
        <Heading>Fill out the Application for this space</Heading>
        </LeftContainer>
        <RightContainer>
          {currentPage === 1 && <PageDate dateRange={dateRange} setDateRange={setDateRange}/>}
          {currentPage === 2 && <PageHazardCheck hazardCheck={hazardCheck} setHazardCheck={setHazardCheck} />}
          {currentPage === 3 && <PageItems items={items} setItems={setItems} />}
          {currentPage === 4 && <PageNeeds needs={needs} setNeeds={setNeeds} />}
          {currentPage === 5 && <PageInsurance protection={protection} setProtection={setProtection} />}
          {currentPage === 6 && <PageCreditCard creditCard={creditCard} setCreditCard={setCreditCard} agreement={agreement} setAgreement={setAgreement} />}

        <ButtonContainer>
        <BackButton onClick={handleBack} disabled={currentPage === 1} style={{ 
          backgroundColor: currentPage !== 1 ? 'white' : '#D8D8D8',
          color: currentPage !== 1 ? 'black' : 'white', 
          padding: '15px 28px',
          borderRadius: '15px',
          border: 'none',
          fontSize: '15px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          width: '90px'
          }}>
        Back
        </BackButton>
        {currentPage !== 6 && (
          <NextButton onClick={handleNext} disabled={currentPage === 6} style={{
            backgroundColor: '#EB65A0',
            color: 'white',
            padding: '15px 28px',
            borderRadius: '15px',
            border: 'none',
            fontSize: '15px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            width: '90px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Next
        </NextButton>
        )}
        {currentPage === 6 && (
          <NextButton onClick={handleSubmit} disabled={currentPage !== 6} style={{
            backgroundColor: '#EB65A0',
            color: 'white',
            padding: '15px 28px',
            borderRadius: '15px',
            border: 'none',
            fontSize: '15px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            width: '90px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            Submit
          </NextButton>
        )}
        </ButtonContainer>
        </RightContainer>
      </Container>
    </div>
  );
}

export default Application;