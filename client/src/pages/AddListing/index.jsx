import React, { useState } from "react";
import * as api from "../../api";
import PageTypeAddress from "./PageTypeAddress";
import PageDescription from "./PageDescription";
import PageSize from "./PageSize";
import PagePrice from "./PagePrice";
import PagePermission from "./PagePermission";
import { Heading, Header, Container, Image, LeftContainer, RightContainer, ButtonContainer, BackButton, NextButton } from './AddListing';
import logo from "/src/assets/logo.png";
import spaceimg from "/src/assets/spacewithquestionmark.png";
import PageImage from "./PageImage";
import { uploadImage } from "../../api/image";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function AddListing() {
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState("room");
  const [address, setAddress] = useState();
  const [description, setDescription] = useState("");
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [pricing, setPricing] = useState();
  const [permission, setPermission] = useState(false);
  const [images, setImages] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();


  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData();
    if (file) {
        fd.append('image', file, file.name)
        const { data } = await uploadImage(fd);
        handleOnSubmitCreateListing(data);
    }
  };

  const handleOnSubmitCreateListing = async (imageId) => {
    const pricingAsNumber = Number(pricing);
    const lengthAsNumber = Number(length);
    const widthAsNumber = Number(width);
    const heightAsNumber = Number(height);

    if (!permission) {
        alert("You must certify that you have the rights/permission to rent out this space.");
      } else if (!address) {
        alert("Please enter and select a valid address for you space.");
        setCurrentPage(1);
      } else if (!description) {
        alert("Please enter a description for your space.");
        setCurrentPage(2);
      } else if (!length || !width) {
        alert("Please enter an approximation for the dimensions of your space.");
        setCurrentPage(3);
      } else if (isNaN(lengthAsNumber)) {
        alert("Please enter a number value for the length field.");
        setCurrentPage(3);
      } else if (isNaN(widthAsNumber)) {
        alert("Please enter a number value for the width field.");
        setCurrentPage(3);
      } else if (height != null && isNaN(heightAsNumber)) {
        alert("Please enter a number value for the height field.");
        setCurrentPage(3);
      } else if (!pricing) {
        alert("Please enter a pricing for your space.");
        setCurrentPage(4);
      } else if (isNaN(pricingAsNumber)) {
        alert("Please enter a number value for the pricing field.");
        setCurrentPage(4);
      } else {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'}`);
        const data = await response.json();
        const features = data.features;
        if (features.length > 0) {
          const feature = features[0];
          const longitude = feature.center[0];
          const latitude = feature.center[1];

          if (longitude && latitude) {
            const listing = {
              hostID: localStorage.getItem("email"),
              address: address,
              longitude: longitude,
              latitude: latitude,
              type: type,
              description: description,
              images: imageId,
              length: lengthAsNumber,
              width: widthAsNumber,
              height: heightAsNumber,
              pricing: pricingAsNumber,
              calendar: [],
              applicationIDs: [],
              isRented: false,
              renterID: null,
              rentalStart: null,
              rentalEnd: null
            };

            try {
              await Promise.all([
                fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${'pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'}`),
                api.createListing(listing)
              ]);
              navigate("/homepage");
              alert("Successfully added listing!");
            } catch (error) {
              alert("Error adding listing");
            }
          } else {
            alert("Error: Longitude or Latitude is blank!");
          }
        } else {
          alert("Address not found!");
        }
      }
  };

  return (
    <div>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <Container>
        <LeftContainer>
        <Image src={spaceimg} alt="Space" />
        <Heading>Tell us about your space</Heading>
        </LeftContainer>
        <RightContainer>
        {currentPage === 1 && <PageTypeAddress key={uuidv4()} type={type} setType={setType} address={address} setAddress={setAddress} />}

        {currentPage === 2 && <PageDescription description={description} setDescription={setDescription} />}
        {currentPage === 3 && <PageSize length={length} setLength={setLength} width={width} setWidth={setWidth} height={height} setHeight={setHeight} />}
        {currentPage === 4 && <PagePrice pricing={pricing} setPricing={setPricing} />}
        {currentPage === 5 && <PageImage images={images} setImages={setImages} file={file} setFile={setFile} />}
        {currentPage === 6 && <PagePermission permission={permission} setPermission={setPermission}/>}

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
          <NextButton onClick={handleNext} disabled={currentPage === 7} style={{
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
          <NextButton onClick={handleOnSubmit} disabled={currentPage === 7} style={{
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

export default AddListing;
