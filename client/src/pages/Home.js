import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TEACHERS } from '../utils/queries';
import TeacherList from '../components/TeacherList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_TEACHERS);
    const teachers = data?.teachers || [];

    return (
      <main>
        <div className="home-page">
          <h1> Home Page </h1>
            {<div className="teacher-list">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TeacherList
              teachers={teachers}
              title="List of teachers..."
            />
          )}
        </div>}   
        </div>
      </main>
    );
  };
  
export default Home;
  