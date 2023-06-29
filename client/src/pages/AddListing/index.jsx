import React, { useState } from "react";
import * as api from "../../api";
import PageTypeAddress from "./PageTypeAddress";
import PageDescription from "./PageDescription";
import PageSize from "./PageSize";
import PagePrice from "./PagePrice";
import PagePermission from "./PagePermission";
import { MainContent, Heading, Header, Container, LeftContainer, RightContainer, ButtonContainer, BackButton, NextButton } from './AddListing';
import logo from "/src/assets/hopbox_letter.png";
import PageImage from "./PageImage";
import { uploadImage } from "../../api/image";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';

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
  const [images, setImages] = useState([]);
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
  
    const imageIDs = [];
    for (let i = 0; i < file.length; i++) {
      const fd = new FormData();
      if (file[i]) {
        fd.append('image', file[i], file[i].name);
        const { data } = await uploadImage(fd);
        imageIDs.push(data);
      }
    }
    handleOnSubmitCreateListing(imageIDs);
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
        <div>
          <Link to="/homepage">
          <img src={logo} alt="Logo" />
          </Link>
        </div>
      </Header>
      <MainContent>
      <Container>
        <LeftContainer>
        <Heading>We Want to Know About Your Space</Heading>
        </LeftContainer>
        <RightContainer>
        {currentPage === 1 && <PageTypeAddress key={uuidv4()} type={type} setType={setType} address={address} setAddress={setAddress} />}
        {currentPage === 2 && <PageDescription description={description} setDescription={setDescription} />}
        {currentPage === 3 && <PageSize length={length} setLength={setLength} width={width} setWidth={setWidth} height={height} setHeight={setHeight} />}
        {currentPage === 4 && <PagePrice pricing={pricing} setPricing={setPricing} />}
        {currentPage === 5 && <PageImage images={images} setImages={setImages} file={file} setFile={setFile} />}
        {currentPage === 6 && <PagePermission permission={permission} setPermission={setPermission}/>}

        <ButtonContainer>
        <BackButton onClick={handleBack} disabled={currentPage === 1}>
        Back
        </BackButton>
        {currentPage !== 6 && (
          <NextButton onClick={handleNext} disabled={currentPage === 7}>
          Next
        </NextButton>
        )}

        {currentPage === 6 && (
          <NextButton onClick={handleOnSubmit} disabled={currentPage === 7}>
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

export default AddListing;
