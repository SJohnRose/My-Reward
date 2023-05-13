import React from 'react';

const NavBar = ({currentPage, handlePageChange}) => {
  return (
    <div className="navbar">
      <ul className="navbar-ul">
        <li className="navbar-li"> 
            <a href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}
             >
            Home 
            </a>
        </li> 
        <li className="navbar-li"> 
            <a href="#Student"
            onClick={() => handlePageChange('Student')}
            className={currentPage === 'Student' ? 'nav-link-active' : 'nav-link'}
             >
            Manage Student
            </a>
        </li> 
        <li className="navbar-li"> 
            <a href="#reward"
            onClick={() => handlePageChange('Reward')}
            className={currentPage === 'Reward' ? 'nav-link-active' : 'nav-link'}
             >
            Reward
            </a>
        </li>
      </ul>  
    </div>
    
  );
};

export default NavBar;