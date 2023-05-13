import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { REMOVE_STUDENT } from '../utils/mutations';



export default function DeleteStudent(props) {
    
    const [studentCode, setStudentCode] = useState('');
    const [removeStudent, { error, data }] = useMutation(REMOVE_STUDENT);
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentCode(value);
    
    };    
    
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      console.log(studentCode);
      try {
        const { data } = await removeStudent({
        variables: {studentCode},
      });
      
      } 
      
        catch (e) {
        console.error(e+"form submit error");
      }
      console.log(data);
    }

       
    
    return (
      <div>
             
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/student">back.</Link>
              </p>
         ) : (
              
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2 className="login-title">Add New Student </h2>
          Enter Student Code:
          <input
            value={studentCode}
            name="studentCode"
            onChange={handleInputChange}
            type="text"
          />
              
                          
          <button type="submit">SUBMIT</button>
          
        </form>
         )}

        {error && (
          <div>
            <p className="error-text">{error.message}</p>
          </div>
            
        )}

      </div>
      
    );
  }