import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAuth } from '../../api/auth';
import { useAuth } from '../../context/AuthContext';
import PopupForm from './EditProfile';
import { ListingList } from '../../components/listingList';
import { RentalList } from '../../components/rentalList';
import MainNavBar from "../../components/mainNavbar";
import { ContentTitle, Wrapper, Divider, OptionList, MainContent } from "../Profile/ProfilePage";
import * as api from "../../api";
import { uploadImage } from "../../api/image";
import { List } from "@material-ui/core";
import { Application } from '../../components/application';
import MenuIcon from '@material-ui/icons/Menu';
import {
  ProfileListItem,
  ListingsListItem,
  RentalsListItem,
  ApplicationsListItem,
  LogoutListItem,
  Container,
  Content,
  ProfilePicture,
  ProfileImage,
  HiddenInput,
  Name,
  Info,
  ListingContent,
  ToggleButton,

} from './ProfilePage';


const ProfilePage = ({ user }) => {
  let { profilePicture, name, email, bio, address, school, occupation, phone } = user;
  profilePicture = localStorage.getItem("profilePicture");
  name = localStorage.getItem("user_name");
  email = localStorage.getItem("email");
  bio = localStorage.getItem("bio");
  address = localStorage.getItem("address");
  school = localStorage.getItem("school");
  occupation = localStorage.getItem("occupation");
  phone = localStorage.getItem("phone");
  const [profilePhoto, setProfilePhoto] = useState(profilePicture);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState(listings);
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState(applications);
  const [rentals, setRentals] = useState([]);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const [selectedOption, setSelectedOption] = useState('Profile');
  const navigate = useNavigate();
  const setAuth = useAuth().setIsAuth;

  const handleLogoutClick = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      clearAuth();
      setAuth(false);
      navigate("/signin");
    }
  }

  const getListing = async (query) => {
    const data = await api.getAllListings();
    setListings(data.data);
    var filtered = listings.filter(
      (listing) => listing.hostID === localStorage.getItem("email")
    );
    setFilteredListings(filtered);
  }

  const getRentals = async (query) => {
    const data = await api.getAllListings();
    setListings(data.data);
    var filtered = listings.filter(
      (listing) => listing.renterID === localStorage.getItem("email")
    )
    setRentals(filtered);
  }

  const getApplications = async (query) => {
    const data = await api.getAllApplications();
    setApplications(data.data);
    var filteredApplications = applications.filter(
      (application) => application.renterID === localStorage.getItem("email")
    );
    setFilteredApplications(filteredApplications);
  }

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    getListing();
    getRentals();
    getApplications();
  })

  const handleImageChange = async (event) => {
    const imageFile = event.target.files[0];
    const newFile = [];
    newFile.push(imageFile);
    let imageID = "";
    const fd = new FormData();
    if (newFile[0]) {
      fd.append('image', newFile[0], newFile[0].name);
      const { data } = await uploadImage(fd);
      imageID = data;
    }
    setProfilePhoto(imageID);
    api.updateUserPhoto(email, imageID);
  };

  return (
    <Divider>
      <MainNavBar />
      <Wrapper>
        <OptionList visible={sidebarVisible}>
          <List>
            <ProfileListItem onClick={() => handleOptionClick('Profile')} selected={selectedOption === 'Profile'} />
            <ListingsListItem onClick={() => handleOptionClick('My Listings')} selected={selectedOption === 'My Listings'} />
            <RentalsListItem onClick={() => handleOptionClick('My Rentals')} selected={selectedOption === 'My Rentals'} />
            <ApplicationsListItem onClick={() => handleOptionClick('My Applications')} selected={selectedOption === 'My Applications'} />
            <LogoutListItem onClick={() => handleLogoutClick()} />
          </List>
        </OptionList>
        <ToggleButton onClick={toggleSidebar}>
          <MenuIcon style={{ marginRight: '20px', cursor: 'pointer' }}/>
        </ToggleButton>
        <MainContent>
          {selectedOption === 'My Listings' && (
            <ListingContent>
              <ContentTitle>My Listings Information</ContentTitle>
              <List>
                <ListingList listings={filteredListings} distances={null} />
              </List>
            </ListingContent>
          )}
          {selectedOption === 'My Rentals' && (
            <ListingContent>
              <ContentTitle>My Rentals Information</ContentTitle>
              <List>
                <RentalList listings={rentals} />
              </List>
            </ListingContent>
          )}
          {selectedOption === 'My Applications' && (
            <ListingContent>
              <ContentTitle>My Applications Information</ContentTitle>
              <List>
                {filteredApplications.map((application, index) => (
                  <Application
                    key={application._id}
                    applicationID={application._id}
                    renterID={application.renterID}
                    listingID={application.listingID}
                    startDate={new Date(application.startDate).toLocaleDateString('en-US')}
                    endDate={new Date(application.endDate).toLocaleDateString('en-US')}
                    items={application.items}
                    needs={application.needs}
                    accepted={application.accepted}
                  >
                    <span>{index + 1}. </span>
                  </Application>
                ))}
              </List>
            </ListingContent>
          )}
          {selectedOption === 'Profile' && (
            <ListingContent>
              <ContentTitle>Profile Information</ContentTitle>
              <Container>
                <Content>
                  <ProfilePicture>
                    <ProfileImage src={"http://localhost:5050/image/" + profilePhoto} alt="Profile Picture"/>
                    <HiddenInput type="file" accept="image/*" onChange={handleImageChange} max="1"/>
                  </ProfilePicture>
                  <div>
                    <Name>{name}</Name>
                    <Info>{email}</Info>
                    <Info>Bio: {bio}</Info>
                    <Info>Address: {address}</Info>
                    <Info>School/College: {school}</Info>
                    <Info>Occupation: {occupation}</Info>
                    <Info>Phone number: {phone}</Info>
                  </div>
                  <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
                </Content>
              </Container>
            </ListingContent>
          )}
        </MainContent>
      </Wrapper>
    </Divider>

  );
};

export default ProfilePage;

