import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { UPDATE_STUDENT } from '../utils/mutations';
import {QUERY_STUDENTS} from '../utils/queries';




export default function DeleteStudent(props) {
    
    const [studentCode, setStudentCode] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [updateStudent, { error, data }] = useMutation(UPDATE_STUDENT , {
      refetchQueries: [
        QUERY_STUDENTS,
        'GetStudents'
      ],
  });
    

    const handleCodeChange = (e) => {
        const { name, value } = e.target;
        setStudentCode(value);
    
    };    
    
    const handleClassChange = (e) => {
      const { name, value } = e.target;
      setStudentClass(value);
  
  };  

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      console.log(studentCode);
      try {
        const { data } = await updateStudent({
        variables: {studentCode, studentClass},
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
                Success! Student class changed.You may now head{' '}
                <Link to="/student">back.</Link>
              </p>
         ) : (
              
        <form className="entry-form" onSubmit={handleFormSubmit}>
          <h2 className="entry-title">Update Student Class</h2>
          <h5>Enter Student Code to Update:</h5>
          <input
            value={studentCode}
            name="studentCode"
            onChange={handleCodeChange}
            type="text"
          />
          <h5>Enter new class:</h5>
          <input
            value={studentClass}
            name="studentClass"
            onChange={handleClassChange}
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