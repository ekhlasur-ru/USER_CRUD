import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileView = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile`);
        setProfile(response.data);
      } catch (error) {
        console.error('There was an error fetching the profile!', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className='h-screen'>
      <h1>{profile.name}</h1>
      <p>{profile.address}</p>
      {profile.image && (
        <img src={profile.image} alt="Profile" />
      )}
    </div>
  );
};

export default ProfileView;
