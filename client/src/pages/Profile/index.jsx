import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAuth } from '../../api/auth';
import { useAuth } from '../../context/AuthContext';
import PopupForm from './EditProfile';
import { ListingList } from '../../components/listingList';
import { RentalList } from '../../components/rentalList';
import MainNavBar from "../../components/mainNavbar";
import { ContentTitle, Wrapper, Divider, OptionList, MainContent, SingleLineTextBox } from "../Profile/ProfilePage";
import * as api from "../../api";
import { List } from "@material-ui/core";
import { Application } from '../../components/application';
import MenuIcon from '@material-ui/icons/Menu';
import * as postApi from "../../api/index";
import {
  ProfileListItem,
  ListingsListItem,
  RentalsListItem,
  ApplicationsListItem,
  LogoutListItem,
  Container,
  Content,
  ProfilePicture,
  Name,
  Info,
  ListingContent,
  ToggleButton,
  ChangePhotoButton,
  ProfileGeneralInfo,
  ProfileContent,
  ProfileOtherInfo,
  MultiLineTextBox,
  SaveButton,

} from './ProfilePage';


const ProfilePage = ({ user }) => {
  let { profilePicture, name, email, bio, address, school, occupation, phone } = user;
  name = localStorage.getItem("user_name");
  email = localStorage.getItem("email");
  bio = localStorage.getItem("bio");
  address = localStorage.getItem("address");
  school = localStorage.getItem("school");
  occupation = localStorage.getItem("occupation");
  phone = localStorage.getItem("phone");

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

  const handleSubmit = async (event) => {
    try {
        event.preventDefault();
        localStorage.setItem("name", name);
        localStorage.setItem("bio", bio);
        //localStorage.setItem("address", address);
        localStorage.setItem("school", school);
        localStorage.setItem("occupation", occupation);
        //localStorage.setItem("phone", phone);
        const email = localStorage.getItem("email");
        const user = await postApi.updateUser(email, bio, address, school, occupation, phone);
        if (user) {
            alert("Successfully edited profile.");
        }
        window.location.reload();
    } catch (err) {
        console.log(err);
        console.log(err.message);
    }

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
                  <ProfileGeneralInfo>
                    <ProfileContent>
                      <ProfilePicture src={profilePicture} alt="Profile Picture" />
                      <ChangePhotoButton>Change Photo</ChangePhotoButton>
                    </ProfileContent>
                    <ProfileContent>
                      <label>First Name*</label>
                      <SingleLineTextBox>{name}</SingleLineTextBox>
                    </ProfileContent>
                    <ProfileContent>
                      <label>Last Name*</label>
                      <SingleLineTextBox>Yu</SingleLineTextBox>
                    </ProfileContent>
                  </ProfileGeneralInfo>

                  <ProfileOtherInfo style={{ marginTop: '20px' }}>
                    <ProfileContent>
                      <label>Bio</label>
                      <MultiLineTextBox placeholder="Tell a little about yourself.">{bio}</MultiLineTextBox>
                    </ProfileContent>
                    <ProfileContent>
                      <label>School (Optional)</label>
                      <SingleLineTextBox>{school}</SingleLineTextBox>
                    </ProfileContent>
                    <ProfileContent>
                      <label>Work (Optional)</label>
                      <SingleLineTextBox>{occupation}</SingleLineTextBox>
                    </ProfileContent>
                  </ProfileOtherInfo>
                  <SaveButton onClick={handleSubmit}>Save</SaveButton>

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

