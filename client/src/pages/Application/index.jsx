import React, { useState, useEffect } from "react";
import * as api from "../../api";
import { Header, Heading, Container, LeftContainer, RightContainer, ButtonContainer, BackButton, NextButton, MainContent } from "./Application";
import { Checkbox, Anchor } from '@mantine/core';
import logo from "/src/assets/images/hopbox_letter.png";
import boximg from "/src/assets/images/Box.png";
import PageDate from "./PageDate";
import PageHazardCheck from "./PageHazardCheck";
import PageItems from "./PageItems";
import PageNeeds from "./PageNeeds";
import PageInsurance from "./PageInsurance";
import PageCreditCard from "./PageCreditCard";
import { useNavigate, Link } from 'react-router-dom';
import MainNavBar from "../../components/mainNavbar";


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

  const pathSegments = window.location.pathname.split('/');
  const listingID = pathSegments[pathSegments.length - 1];  

  const [data, setData] = useState(null);
  
  //const {listingID} = useParams();

  useEffect(() => {
    async function fetchData() {
        const result = await api.getListingById(listingID);
        setData(result);
    }
    fetchData();
  }, []);

  let applicationData = {
    hostID: "",
    renterID: localStorage.getItem("email"),
    listingID: listingID,
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
      {/* <Header>
         <div>
            <Link to="/homepage">
            <img src={logo} alt="Logo" />
            </Link>
        </div>
      </Header> */}
      <MainNavBar/>
      <MainContent>
      <Container>
        <LeftContainer>
        {/* <Image src={boximg} alt="Box" /> */}
        <Heading>Fill Out the Application for this Space</Heading>
        </LeftContainer>
        <RightContainer>
          {currentPage === 1 && <PageDate dateRange={dateRange} setDateRange={setDateRange}/>}
          {currentPage === 2 && <PageHazardCheck hazardCheck={hazardCheck} setHazardCheck={setHazardCheck} />}
          {currentPage === 3 && <PageItems items={items} setItems={setItems} />}
          {currentPage === 4 && <PageNeeds needs={needs} setNeeds={setNeeds} />}
          {currentPage === 5 && <PageInsurance protection={protection} setProtection={setProtection} />}
          {currentPage === 6 && <PageCreditCard creditCard={creditCard} setCreditCard={setCreditCard} agreement={agreement} setAgreement={setAgreement} dateRange={dateRange} pricing={data.pricing} />}

        <ButtonContainer>
        <BackButton onClick={handleBack} disabled={currentPage === 1}>
        Back
        </BackButton>
        {currentPage !== 6 && (
          <NextButton onClick={handleNext} disabled={currentPage === 6}>
          Next
        </NextButton>
        )}
        {currentPage === 6 && (
          <NextButton onClick={handleSubmit} disabled={currentPage !== 6}>
            Submit
          </NextButton>
        )}
        </ButtonContainer>
        </RightContainer>
      </Container>
      </MainContent>
    </div>
  );
}

export default Application;
