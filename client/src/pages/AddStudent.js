import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_STUDENT } from '../utils/mutations';
import {QUERY_STUDENTS} from '../utils/queries';



export default function AddStudent(props) {
    
    const [formState, setFormState] = useState({ studentCode: '', studentName: '',  studentClass: '', email: '', });
    const [addStudent, { error, data }] = useMutation(ADD_STUDENT, {
      refetchQueries: [
        QUERY_STUDENTS,
        'GetStudents'
      ],
  
    });
    console.log(data);    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };    
    
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      console.log(formState);
      try {
        const { data } = await addStudent({
        variables: { ...formState },
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
                Success! You may now head{' '}
                <Link to="/student">back.</Link>
              </p>
         ) : (
              
        <form className="entry-form" onSubmit={handleFormSubmit}>
          <h2 className="entry-title">Add New Student </h2>
          <h5>Student Code:</h5>
          <input
            value={formState.studentCode}
            name="studentCode"
            onChange={handleInputChange}
            type="text"
          />
          <h5>Student Name:</h5>
          <input
            value={formState.studentName}
            name="studentName"
            onChange={handleInputChange}
            type="text"
          />
          <h5>Class:</h5>
          <input
            value={formState.studentClass}
            name="studentClass"
            onChange={handleInputChange}
            type="text"
          />
          <h5>Email:</h5>
          <input
            value={formState.email}
            name="email"
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