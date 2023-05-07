import React, {useState} from 'react';

export default function SignUp() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
  
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === 'name') {
        setName(inputValue);
      } 
      else if (inputType === 'password') {
        setPassword(inputValue);
      }
            
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      
      setName('');
      setPassword('');
      setErrorMessage('');
    };
  
    return (
      <div>
        <h2 className="signup-title">Sign Up </h2>
        <form className="signup-form">
          Name:
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
          />
          Password:
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
          />
                   
          <button type="button" onClick={handleFormSubmit}>Sign Up</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }