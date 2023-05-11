import {React, useState} from 'react';

import Login from './Login';
import SignUp from './SignUp';
import TeacherOptions from './TeacherOptions';



const Teacher = () => {
  const [currentPage, setCurrentPage] = useState('Login');

  const renderPage = () => {
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'SignUp') {
      return <SignUp />;
    }
    if (currentPage === 'Options') {
      return <TeacherOptions />;
    }
    
  };
    return (
      <main className="teacher-page">
        
        <div className="login-section">
            {renderPage()}
        </div>
      </main>
    );
  };
  
export default Teacher;