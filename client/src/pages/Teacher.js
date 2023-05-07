import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TEACHERS } from '../utils/queries';
import TeacherList from '../components/TeacherList';


const Teacher = () => {
    const { loading, data } = useQuery(QUERY_TEACHERS);
    const teachers = data?.teachers || [];

    return (
      <main>
        <div className="home-page">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TeacherList
              teachers={teachers}
              title="List of teachers..."
            />
          )}
        </div>
      </main>
    );
  };
  
export default Teacher;