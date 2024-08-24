import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id='testimonials' className="testimonials">
      <h2>Hear What Our Clients Have To Say About Us</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">"Great service!" - John Doe</div>
        <div className="testimonial-item">"Highly recommended!" - Jane Smith</div>
      </div>
    </section>
  );
};

export default Testimonials;
