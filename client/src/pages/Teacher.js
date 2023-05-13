import {React, useState} from 'react';

import Login from './Login';
import SignUp from './SignUp';
import TeacherOptions from './TeacherOptions';



const Teacher = () => {
  const [currentPage, setCurrentPage] = useState('Login');

      return (
      <main className="page">
        
        <div className="login-section">
            <h2> Manage Student Page</h2>
        </div>
      </main>
    );
  };
  
export default Teacher;