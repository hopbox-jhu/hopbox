import React, { useState, useContext, useEffect } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { clearAuth } from '../../api/auth';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../context/AuthContext';
import PopupForm from './EditProfile';
import { ListingWrapper, Sidebar } from '../Homepage/Homepage';
import { ListingList } from '../../components/listingList';
import { baseApiUrl } from 'mapbox-gl';
import * as api from "../../api";


const ProfilePage = ({ user }) => {
  let { profilePicture, name, email, bio, address, school, occupation } = user;
  name = localStorage.getItem("user_name");
  email = localStorage.getItem("email");
  bio = localStorage.getItem("bio");
  console.log("her1: " + bio);
  address = localStorage.getItem("address");
  school = localStorage.getItem("school");
  occupation = localStorage.getItem("occupation");

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
    setSelectedOption(option); // Update selected option state
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
    console.log(data);
    var filteredApplications = applications.filter(
      //The filtering should be controlled here, always get all applications but narrow it down with a filter HERE.
      (application) => application.hostID === localStorage.getItem("email")
    );
    setFilteredApplications(filteredApplications);
  }

  useEffect( () => {
    getListing();
    getRentals();
  })

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: '0 0 20%', backgroundColor: '#F8EAF4', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0', textAlign: 'center' }}>
          <li onClick={() => handleOptionClick('Profile')} style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', border: selectedOption === 'Profile' ? '1px solid #E91E63' : 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
            <AccountCircleIcon style={{ marginRight: '0.5rem' }} /> Profile
          </li>
          <li onClick={() => handleOptionClick('My Listings')} style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', border: selectedOption === 'My Listings' ? '1px solid #E91E63' : 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
            <HomeIcon style={{ marginRight: '0.5rem' }} /> My Listings
          </li>
          <li onClick={() => handleOptionClick('My Rentals')} style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', border: selectedOption === 'My Rentals' ? '1px solid #E91E63' : 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
            <WorkIcon style={{ marginRight: '0.5rem' }} /> My Rentals
          </li>
          <li onClick={() => handleOptionClick('My Applications')} style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', border: selectedOption === 'My Applications' ? '1px solid #E91E63' : 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
            <HelpIcon style={{ marginRight: '0.5rem' }} /> My Applications
          </li>
          <li onClick={() => handleLogoutClick()} style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'red', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
            <ExitToAppIcon style={{ marginRight: '0.5rem' }} /> Logout
          </li>
        </ul>
      </div>

      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2rem', backgroundColor: '#FFFFFF' }}>
        {selectedOption === 'My Listings' && (
          <div>
            <h1>My Listings Information</h1>
            <ListingWrapper>
                    <Sidebar>
                        <ListingList listings={filteredListings} />
                    </Sidebar>
            </ListingWrapper>
          </div>
        )}
        {selectedOption === 'My Rentals' && (
          <div>
            <h1>My Rentals Information</h1>
            <ListingWrapper>
                    <Sidebar>
                        <ListingList listings={rentals} />
                    </Sidebar>
            </ListingWrapper>
          </div>
        )}
        {selectedOption === 'Profile' && (
          // Render Profile information
          <div>
            <h1 style={{ position: 'fixed', top: '0', left: '0', paddingLeft: '20rem', paddingTop: '2rem' }}>Profile Information</h1>
            <div style={{ display: 'flex', minHeight: '100vh', paddingTop: '5rem' }}>
              <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2rem', backgroundColor: '#FFFFFF' }}>
                <img style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '4px solid #E91E63' }} src={profilePicture} alt="Profile Picture" />
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#E91E63', marginBottom: '0.5rem' }}>{name}</div>
                  <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{email}</div>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#757575' }}>Bio: {bio}</div>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#757575' }}>Address: {address}</div>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#757575' }}>School/College: {school}</div>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#757575' }}>Occupation: {occupation}</div>
                </div>
                <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup}/>
              </div>
            </div>
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

