import {React, useState} from 'react';
import { useQuery} from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_REWARDS  } from '../utils/queries';
import TeacherList from '../components/TeacherList';
import Login from './Login';


const Home = () => {
       
    const rewardsQuery = useQuery(QUERY_REWARDS);
    const rewards = rewardsQuery.data?.rewards || [];
            
    return (
      <main className="home-page">
              
              {<div className="teacher-list">
            {rewards.loading ? (
              <div>Loading...</div>) : 
              (
              <TeacherList
                rewards={rewards}
                title="Recent rewards...."
              />
              )}
          </div>}   
          
          <div className="login-section">
            <Login />
            <p>New User? <Link to="/signup">Sign Up Now </Link></p>
          </div>
        </main>
    );
  };
  
export default Home;
  