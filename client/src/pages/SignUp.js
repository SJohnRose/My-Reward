import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_TEACHER } from '../utils/mutations';
import Auth from '../utils/auth';
import teacherQuoteImage from '../../src/assets/images/teacher-quote1.png';



export default function SignUp(props) {
    
    const [formState, setFormState] = useState({ name: '', email: '', password: '' });
    const [addTeacher, { error, data }] = useMutation(ADD_TEACHER);
          

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
        const { data } = await addTeacher({
        variables: { ...formState },
      });

      Auth.login(data.addTaacher.token);
      } 
        catch (e) {
        console.error(e);
      }
    }

       
    
    return (
      <div className="page">
        <div className="signup-section">
        <div className="signup-section1">  
        {data ? (
              <p>
                {/* Success! You may now head{' '} */}
                <Navigate to="/" replace={true}/>
              </p>
         ) : (
              
        <form className="signup-form" onSubmit={handleFormSubmit}>
          <h2 className="login-title">New Teacher Sign Up </h2>
          <h5>Name:</h5>
          <input
            value={formState.name}
            name="name"
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
          <h5>Password:</h5>
          <input
            value={formState.password}
            name="password"
            onChange={handleInputChange}
            type="password"
          />
                   
          <button type="submit">Sign Up</button>
          
        </form>
         )}

        {error && (
          <div>
            <p className="error-text">{error.message}</p>
          </div>
            
        )}
      </div>

      <div className="signup-section2">
        
      </div>

      </div>
      </div>
      
    );
  }