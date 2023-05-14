import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <Link to="/" style={{ fontSize: '3rem' }}>
          <p>My Rewards</p>
        </Link>
        <p style={{ fontSize: '1.75rem', fontWeight: '500' }}>
          Appreciate and reward your students!
        </p>
      </div>
    
  );
};

export default Header;