import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    // <div className="header">
    //     <Link to="/" style={{ fontSize: '3rem' }}>
    //       <p>My Rewards</p>
    //     </Link>
    //     <p style={{ fontSize: '1.75rem', fontWeight: '500' }}>
    //       Appreciate and reward your students!
    //     </p>
    //   </div>
    <header className="header">
      <div className="container">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">My Rewards</h1>
          </Link>
          <p>Appreciate and reward your students...</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="header-button" to="/me">
                {Auth.getProfile().data.name}'s profile
              </Link>
              <button className="header-button" onClick={logout}>
                Logout
              </button>
            </>
          ) : 
          (
            <>
              <Link className="header-button" to="/login">
                Login
              </Link>
              <Link className="header-button" to="/signup">
                Signup
              </Link>
            </>
          )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;