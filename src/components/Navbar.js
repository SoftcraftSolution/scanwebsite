import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scroll.scrollToTop()}></div>
      <ul className="nav-links">
      <li>
          <Link to="how-it-works" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="how-it-works" smooth={true} duration={500}>
            Working
          </Link>
        </li>
        <li>
          <Link to="benefits" smooth={true} duration={500}>
            Benefits
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
      </ul>
      <button className="contact-button">
        <Link to="contact-form" smooth={true} duration={500}>
          Contact Us
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
