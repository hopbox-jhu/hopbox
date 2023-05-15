import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAuth } from '../../api/auth';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../context/AuthContext';
import PopupForm from './EditProfile';
import { ListingList } from '../../components/listingList';
import { RentalList } from '../../components/rentalList';
import { baseApiUrl } from 'mapbox-gl';

import * as api from "../../api";
import { List } from "@material-ui/core";
import { Application } from '../../components/application';
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
  Info

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

  const [selectedOption, setSelectedOption] = useState('Profile'); // State to keep track of selected option
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const setAuth = useAuth().setIsAuth;

  const handleLogoutClick = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      clearAuth();
      setAuth(false);
      navigate("/signin");
    }
    //window.location.reload();
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

  useEffect( () => {
    getListing();
    getRentals();
    getApplications();
  })

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: '0 0 20%', backgroundColor: '#F8EAF4', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0', textAlign: 'left' }}>
          <ProfileListItem onClick={() => handleOptionClick('Profile')} selected={selectedOption === 'Profile'} />
          <ListingsListItem onClick={() => handleOptionClick('My Listings')} selected={selectedOption === 'My Listings'} />
          <RentalsListItem onClick={() => handleOptionClick('My Rentals')} selected={selectedOption === 'My Rentals'} />
          <ApplicationsListItem onClick={() => handleOptionClick('My Applications')} selected={selectedOption === 'My Applications'} />
          <LogoutListItem onClick={() => handleLogoutClick()} />
        </ul>
      </div>

      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2rem', backgroundColor: '#FFFFFF' }}>
        {selectedOption === 'My Listings' && (
          <div>
            <h1 style={{ position: 'fixed', top: '0', left: '0', paddingLeft: '25rem', paddingTop: '2rem' }}>My Listings Information</h1>
            <List>
              <ListingList listings={filteredListings} />
            </List>
          </div>
        )}
        {selectedOption === 'My Rentals' && (
          <>
            <h1 style={{ position: 'fixed', top: '0', left: '0', paddingLeft: '25rem', paddingTop: '2rem' }}>My Rentals Information</h1>
            <List>                       
              <RentalList listings={rentals} />
            </List> 
          </>
        )}
        {selectedOption === 'My Applications' && (
          <>
            <h1 style={{ position: 'fixed', top: '0', left: '0', paddingLeft: '25rem', paddingTop: '2rem' }}>My Applications Information</h1>
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
          </>
        )}
        {selectedOption === 'Profile' && (
          // Render Profile information
          <div>
            <h1 style={{ position: 'fixed', top: '0', left: '0', paddingLeft: '25rem', paddingTop: '2rem' }}>Profile Information</h1>
            <Container>
            <Content>
              <ProfilePicture src={profilePicture} alt="Profile Picture" />
              <div>
                <Name>{name}</Name>
                <Info>{email}</Info>
                <Info>Bio: {bio}</Info>
                <Info>Address: {address}</Info>
                <Info>School/College: {school}</Info>
                <Info>Occupation: {occupation}</Info>
                <Info>Phone number: {phone}</Info>
              </div>
              <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup}/>
            </Content>
          </Container>
          </div>
        )}
        {selectedOption === 'Logout' && (
          // Render Logout information
          <div>
            <h1>Logout Information</h1>
            {/* Add content for Logout information */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

