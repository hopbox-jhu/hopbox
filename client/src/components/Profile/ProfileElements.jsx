import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
  padding: 32px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  text-align: center;
`;

const ProfileName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ProfileEmail = styled.div`
  font-size: 16px;
  color: #777;
`;

const ProfileBio = styled.div`
  font-size: 14px;
  color: #555;
`;

const ProfileAddress = styled.div`
  font-size: 14px;
  color: #555;
`;

const ProfileButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfilePage = ({ user }) => {
  const { profilePicture, name, email, bio, address } = user;

  return (
    <ProfileContainer>
      <ProfilePicture src={profilePicture} alt="Profile Picture" />
      <ProfileInfo>
        <ProfileName>{name}</ProfileName>
        <ProfileEmail>{email}</ProfileEmail>
        <ProfileBio>{bio}</ProfileBio>
        <ProfileAddress>{address}</ProfileAddress>
      </ProfileInfo>
      <ProfileButton>Edit Profile</ProfileButton>
    </ProfileContainer>
  );
};

export default ProfilePage;
