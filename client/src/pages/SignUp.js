import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_TEACHER } from '../utils/mutations';
import Auth from '../utils/auth';



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
      <div>
             
        {data ? (
              <p>
                {/* Success! You may now head{' '} */}
                <Navigate to="/" replace={true}/>
              </p>
         ) : (
              
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2 className="login-title">New Teacher Sign Up </h2>
          Name:
          <input
            value={formState.name}
            name="name"
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
          Password:
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
      
    );
  }