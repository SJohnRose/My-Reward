import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_SINGLE_TEACHER, QUERY_TEACHERS } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { LOGIN_TEACHER } from '../utils/mutations';
import Auth from '../utils/auth';


export default function Login(props) {
    
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    // const [teacherList, setTeacherList] = useState([]);
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_TEACHER);
          

    const handleInputChange = (e) => {
      // const { target } = e;
      // const inputType = target.name;
      // const inputValue = target.value;
  
      // if (inputType === 'email') {
      //   setEmail(inputValue);
      // } 
      // else if (inputType === 'password') {
      //   setPassword(inputValue);
      // }
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
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
      // setPassword('');
      // setEmail('');
      // setErrorMessage('');
    };

    
    // let getEmail = props.email;
    // // console.log(getEmail);
    // // const { loading, error, data } = useQuery(QUERY_TEACHERS);
    // const { loading, error, data } = useQuery(QUERY_SINGLE_TEACHER, {
    //   variables: { email: getEmail },
    // });
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
      
    
    return (
      <div>
        <h2 className="login-title">Login </h2>
        {/* <div> */}
            {/* {JSON.stringify(data)} */}
            {/* <select name='teacher' >
              {data.teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.name}>
              {teacher.name}
              </option>
              ))}
            </select> */}
        {/* </div> */}
        <div>
        {data ? (
              <p>
                Success! You may now head{' '}
                {/* <Link to="/">back to the homepage.</Link> */}
              </p>
              ) : (
        <form className="login-form" onSubmit={handleFormSubmit}>
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
                   
          <button type="submit">Login</button>
          
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