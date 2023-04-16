import React from 'react';

const ProfilePage = ({ user }) => {
  const { profilePicture, name, email, bio, address } = user;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2rem' }}>
      <img style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }} src={profilePicture} alt="Profile Picture" />
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{name}</div>
        <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{email}</div>
        <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{bio}</div>
        <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{address}</div>
      </div>
      <button style={{ padding: '0.5rem 1rem', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#007BFF', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;
