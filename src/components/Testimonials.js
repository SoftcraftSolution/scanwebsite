import React from 'react';
import './Testimonials.css';
import client1 from './client1.png';
import client2 from './client2.png';
import client3 from './client3.png';

const Testimonials = () => {
  return (
    <section id='testimonials' className="testimonials">
      <div className="testimonials-text">
        <h2>Hear What Our Clients Have To Say About Us</h2>
        <p>Our clients are thrilled with ScanStar, praising its ease of use and positive impact on customer engagement and loyalty.</p>
        <p>If you like our product, please share your feedback to help us improve and reach more businesses with ScanStar.</p>
        <button className="review-button">Review Us</button>
      </div>
      <div className="testimonial-list">
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={client1} alt="Client 1" className="testimonial-avatar" />
            <div>
              <h3>Jaydeep Thakar</h3>
              <p>Sales Manager</p>
            </div>
            <div className="testimonial-rating">
              <span>★★★★★</span>
            </div>
          </div>
          <p>"The platform has significantly improved our customer engagement and provided valuable insights."</p>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={client2} alt="Client 2" className="testimonial-avatar" />
            <div>
              <h3>Jaydeep Thakar</h3>
              <p>Sales Manager</p>
            </div>
            <div className="testimonial-rating">
              <span>★★★★★</span>
            </div>
          </div>
          <p>"Highly intuitive and user-friendly. ScanStar is a game-changer in customer relationship management."</p>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={client3} alt="Client 3" className="testimonial-avatar" />
            <div>
              <h3>Jaydeep Thakar</h3>
              <p>Sales Manager</p>
            </div>
            <div className="testimonial-rating">
              <span>★★★★★</span>
            </div>
          </div>
          <p>"ScanStar has helped us streamline operations and increase customer satisfaction."</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
