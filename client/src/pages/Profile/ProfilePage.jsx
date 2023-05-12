import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';
import PopupForm from './EditProfile';


const ListItem = ({ onClick, selected, children }) => (
  <li
    onClick={onClick}
    style={{
      marginBottom: '1rem',
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

export {
  ProfileListItem,
  ListingsListItem,
  RentalsListItem,
  ApplicationsListItem,
  LogoutListItem

};
