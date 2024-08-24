import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <section id='contact-form' className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone number" />
        <textarea placeholder="Type your message..."></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
