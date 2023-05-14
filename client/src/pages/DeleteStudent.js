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
      <div className="page">
             
        {data ? (
              <p>
                Success! Student removed from Database.You may now head{' '}
                <Link to="/student">back.</Link>
              </p>
         ) : (
              
        <form className="entry-form" onSubmit={handleFormSubmit}>
          <h2 className="entry-title">Remove Student </h2>
          <h5>Enter Student Code to delete:</h5>
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