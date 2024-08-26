import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://ambulance-booking-backend.vercel.app/user/contactus', formData);
      
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id='contact-form' className="contact-form">
      <h2>Contact Us</h2>
      <p>To learn about new offers, please fill out the form below.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Type your message..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
