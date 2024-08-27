import React from 'react';
import "../styles/Navbar.css";

export default function myNavbar({ currentPage, handlePageChange }) {
  return (
    //using ul to render the different pages
    <ul className="navbar nav-tabs">
      <li className="navbar-items">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
      
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="navbar-items">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="navbar-items">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="navbar-items">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="navbar-items">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
         
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}


