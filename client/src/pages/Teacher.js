import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TEACHERS } from '../utils/queries';
import TeacherList from '../components/TeacherList';
import SignUp from './SignUp';


const Teacher = () => {
    const { loading, data } = useQuery(QUERY_TEACHERS);
    const teachers = data?.teachers || [];

    return (
      <main className="teacher-page">
        <div className="teacher-list">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TeacherList
              teachers={teachers}
              title="List of teachers..."
            />
          )}
        </div>
        <div className="signup-section">
            <SignUp />
        </div>
      </main>
    );
  };
  
export default Teacher;