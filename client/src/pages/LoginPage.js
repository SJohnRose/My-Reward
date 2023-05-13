import React from 'react';
import { useQuery, useState } from '@apollo/client';
import { QUERY_TEACHERS } from '../utils/queries';
import TeacherList from '../components/TeacherList';
import Login from './Login';
import SignUp from './SignUp';

const LoginPage = () => {
    const { loading, error, data } = useQuery(QUERY_TEACHERS);
    const teachers = data?.teachers || [];
    return (
        <main className="home-page">
          {/* <div className="home-page"> */}
            
              {<div className="teacher-list">
            {loading ? (
              <div>Loading...</div>) : 
              (
              <TeacherList
                teachers={teachers}
                title="Recent rewards...."
              />
              )}
          </div>}   
          {/* </div> */}
          <div className="login-section">
            <Login />
            <h2> New User? <a href ="{<SignUp />}">Sign Up Now </a></h2>
          </div>
        </main>
      );
    };
    
  export default LoginPage;