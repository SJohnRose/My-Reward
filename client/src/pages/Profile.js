import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import Student from '../pages/Student';

const Profile = () => {
  const { profileId } = useParams();
  console.log(profileId);

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId},
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const teacher = data?.me || data?.teacher || {};
  
  // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/student"/>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!teacher?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. 
      </h4>
    );
  }

  return (
    <div>
      <h2 >
        {profileId ? `${teacher.name}'s Profile` :'Your'} Profile
      </h2>
      <div>
      <Navigate to="/student" replace={true}/>
      </div>
    </div>
  );
};

export default Profile;