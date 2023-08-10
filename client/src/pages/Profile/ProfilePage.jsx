import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #FFF1F6;
  height: 100px;
  width: 100%;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 27px;
    margin-left: 40px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2), transparent);
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 80px;

    img {
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: auto; /* Adjust to automatically adjust width based on content */

    img {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%; /* Set width to 100% to ensure it spans the available width */
      height: auto; /* Allow height to adjust based on the image's aspect ratio */
      margin: 0 auto; /* Center the image horizontally */
    }
  }
`;

const ListItem = ({ onClick, selected, children }) => (
  <li
    onClick={onClick}
    style={{
      marginBottom: '1rem',
      marginTop: '1rem',
      fontSize: '1.2rem',
      fontWeight: 'medium',
      color: selected ? '#EB65A0' : 'black',
      border: selected ? '2px solid black' : 'none',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
    }}
  >
    {children}
  </li>
);

const ProfileListItem = ({ onClick, selected }) => (
  <ListItem onClick={onClick} selected={selected}>
    <AccountCircleIcon style={{ marginRight: '0.5rem' }} />
    Profile
  </ListItem>
);

const ListingsListItem = ({ onClick, selected }) => (
  <ListItem onClick={onClick} selected={selected}>
    <HomeIcon style={{ marginRight: '0.5rem' }} />
    My Listings
  </ListItem>
);

const RentalsListItem = ({ onClick, selected }) => (
  <ListItem onClick={onClick} selected={selected}>
    <WorkIcon style={{ marginRight: '0.5rem' }} />
    My Rentals
  </ListItem>
);

const ApplicationsListItem = ({ onClick, selected }) => (
  <ListItem onClick={onClick} selected={selected}>
    <HelpIcon style={{ marginRight: '0.5rem' }} />
    My Applications
  </ListItem>
);

const LogoutListItem = ({ onClick }) => (
  <ListItem
    onClick={onClick}
    style={{
      marginBottom: '1rem',
      fontSize: '1.2rem',
      fontWeight: 'medium',
      color: '#EB65A0',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'left',
    }}
  >
    <ExitToAppIcon style={{ marginRight: '0.5rem' }} />
    Logout
  </ListItem>
);


export const Container = styled.div`
  padding-top: 3rem;
`;

export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid #EB65A0;
`;

export const Title = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 25rem;
  padding-top: 2rem;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  background-color: #FFFFFF;
`;

export const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #EB65A0;
  margin-bottom: 0.5rem;
`;

export const Info = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #757575;
`;


export const ContentTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  position: 'fixed';
  top: '0';
  left: '0';
  paddingLeft: '25rem';
`;

export const ListingContent = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const Wrapper = styled.div`
    margin-top: 12vh;
    margin-left: 2vw;
    display: flex;
`;

export const Divider = styled.div`
  display: flex;
  background: white;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    height: 200vh;
    flex-direction: column;
  }
`;

// export const OptionList = styled.div`
//   flex: '0 0 20%';
//   backgroundColor: '#F8EAF4';
//   padding: '2rem';
//   display: 'flex';
//   flexDirection: 'column';
//   alignItems: 'center';

//   @media screen and (max-width: 768px) {
//     display: ${props => (props.visible ? 'flex' : 'none')};
//   }
// `;

export const OptionList = styled.div`
  background-color: #F8EAF4;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  width: 200px; /* Set the desired width */
  height: 100%; /* Set the desired height */

  @media screen and (max-width: 768px) {
    position: ${props => (props.visible ? 'fixed' : 'initial')};
    top: 120px; /* Adjust the position based on your design */
    right: 20px; /* Adjust the position based on your design */
    z-index: 9999;
    display: ${props => (props.visible ? 'flex' : 'none')};
    bottom: 20px; /* Adjust the position based on your design */
    left: 50%; /* Center it horizontally */
    transform: ${props =>
      props.visible ? 'translateX(-50%)' : 'translateX(0)'};
  }
`;

export const List = styled.ul`
  listStyle: 'none';
  padding: '0';
  margin: '0';
  textAlign: 'left';
`;

export const MainContent = styled.div`
  flex: '1';
  display: 'flex';
  alignItems: 'center';
  justifyContent: 'center';
  flexDirection: 'column';
  padding: '2rem';
  backgroundColor: '#FFFFFF';
  overflow-y: scroll;
  margin-top: 70px;
  max-height: 100%;
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 120px; /* Adjust the position based on your design */
  left: 20px; /* Adjust the position based on your design */
  z-index: 9999;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  display: block; /* Default display */

  @media screen and (min-width: 769px) {
    display: none; /* Hide on screens wider than 768px */
  }
`;


export {
  ProfileListItem,
  ListingsListItem,
  RentalsListItem,
  ApplicationsListItem,
  LogoutListItem

};
