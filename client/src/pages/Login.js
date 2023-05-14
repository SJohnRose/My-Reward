import React, {useState, useEffect} from 'react';
import { Link, Navigate} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_TEACHER } from '../utils/mutations';
import Auth from '../utils/auth';
import Student from './Student';



export default function Login(props) {
    
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_TEACHER);
          

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
          const { data } = await login({
            variables: { ...formState },
          });
          Auth.login(data.login.token);
      } 
      catch (e) {
        console.error(e);
      }
    
      setFormState({
      email: '',
      password: '',
      });
    };

     
    
    return (
      <div> 
        
        <div>
        {data ? (
          
          // <p>
          //   Login Success! {data.login.teacher._id} You may now head to {}
            <Navigate to={{ pathname: `/profile/${data.login.teacher._id}`}}/> 
          // </p>
        ) :
        (     
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2 className="login-title">Login </h2>
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
                   
          <button type="submit" className="login-button">Login</button>
          
        </form>
        )}
        {error && (
          <div>
            <p className="error-text">{error.message}</p>
          </div>
            
        )}

      </div>
      </div>
    );
  };