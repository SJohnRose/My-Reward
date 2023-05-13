import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_STUDENT } from '../utils/mutations';



export default function AddStudent(props) {
    
    const [formState, setFormState] = useState({ studentCode: '', studentName: '',  studentClass: '', email: '', });
    const [addStudent, { error, data }] = useMutation(ADD_STUDENT);
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
      <div>
             
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
         ) : (
              
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2 className="login-title">Add New Student </h2>
          Student Code:
          <input
            value={formState.studentCode}
            name="studentCode"
            onChange={handleInputChange}
            type="text"
          />
          Student Name:
          <input
            value={formState.studentName}
            name="studentName"
            onChange={handleInputChange}
            type="text"
          />
          Class:
          <input
            value={formState.studentClass}
            name="studentClass"
            onChange={handleInputChange}
            type="text"
          />
          Email:
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