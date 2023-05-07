import React, { useState } from 'react';
import Home from '../pages/Home';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

export default function MainSection() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    // if (currentPage === 'Teacher') {
    //   return <Teacher />;
    // }
    // if (currentPage === 'Student') {
    //   return <Student />;
    // }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main-page">
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}