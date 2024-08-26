import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-links">
        <li>
          <Link to="how-it-works" smooth={true} duration={500}>
            How It Works
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
        <li>
          <Link to="pricing" smooth={true} duration={500}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="find-us" smooth={true} duration={500}>
            Find Us
          </Link>
        </li>
        <li>
          <Link to="contact-form" smooth={true} duration={500}>
            Contact Us
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
