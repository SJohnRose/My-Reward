import {React, useState} from 'react';
import { useQuery} from '@apollo/client';
import { QUERY_TEACHERS } from '../utils/queries';
import TeacherList from '../components/TeacherList';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const Home = () => {
    const { loading, data } = useQuery(QUERY_TEACHERS);
    const teachers = data?.teachers || [];
    //console.log(teachers);
    const [currentPage, setCurrentPage] = useState('Login');

    const renderPage = () => {
      if (currentPage === 'Login') {
        return <LoginPage />;
      }
      // if (currentPage === 'Student') {
      //   return <SignUpPage />;
      // }
    };

    return (
      <div>
      {renderPage()}
      
      </div>
    );
  };
  
export default Home;
  