import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const ProfilePage = ({ user }) => {
  let { profilePicture, name, email, bio, address } = user;
  name = localStorage.getItem("user_name");
  email = localStorage.getItem("email");
  bio = localStorage.getItem("bio");
  console.log("her1: " + bio);
  address = localStorage.getItem("address");
  
  const [selectedOption, setSelectedOption] = useState('Profile'); // State to keep track of selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update selected option state
  };

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
          <li onClick={() => handleOptionClick('(Placeholder)')} style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', border: selectedOption === '(Placeholder)' ? '1px solid #E91E63' : 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
            <HelpIcon style={{ marginRight: '0.5rem' }} /> (Placeholder)
          </li>
          <li onClick={() => handleOptionClick('Logout')} style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', border: selectedOption === 'Logout' ? '1px solid #E91E63' : 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
            <ExitToAppIcon style={{ marginRight: '0.5rem' }} /> Logout
          </li>
        </ul>
      </div>
      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2rem', backgroundColor: '#FFFFFF' }}>
        {selectedOption === 'Today' && (
          // Render Today information
          <div>
            <h1>Today Information</h1>
            {/* Add content for Today information */}
          </div>
        )}
        {selectedOption === 'My Listings' && (
          // Render My Listings information
          <div>
            <h1>My Listings Information</h1>
            {/* Add content for My Listings information */}
          </div>
        )}
        {selectedOption === 'My Rentals' && (
          // Render My Rentals information
          <div>
            <h1>My Rentals Information</h1>
            {/* Add content for My Rentals information */}
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
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#757575' }}>{bio}</div>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#757575' }}>{address}</div>
                </div>
                <button style={{ padding: '0.5rem 1rem', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#E91E63', color: '#fff', borderRadius: '4px', cursor: 'pointer', border: 'none', marginTop: '1rem' }}>Edit Profile</button>
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

