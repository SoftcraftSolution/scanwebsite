import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <h2>How will it Benefit your Business</h2>
      <p className='ptag'>ScanStar boosts customer loyalty with easy QR code rewards, while providing your business 
      with valuable feedback and insights.</p><br></br><br></br>
      <div className="benefit-list">
        <div className="benefit-item">
          <h3>Customer Engagement</h3>
          <p>Boosts interaction with easy QR code feedback, encouraging more customer participation.</p>
        </div>
        <div className="benefit-item">
          <h3>Enhanced Loyalty</h3>
          <p>Instant rewards through ScanStar build stronger customer loyalty and encourage repeat business.</p>
        </div>
        <div className="benefit-item">
          <h3>Real-Time Feedback</h3>
          <p>Provides immediate insights into customer satisfaction for quick improvements.</p>
        </div>
        <div className="benefit-item">
          <h3>Data-Driven Decisions</h3>
          <p>Leverage feedback to make informed decisions, refine offerings, and tailor services based on customer preferences.</p>
        </div>
        <div className="benefit-item">
          <h3>Cost-Effective Solution</h3>
          <p>Achieve significant customer engagement benefits at an affordable price, providing great value without high costs.</p>
        </div>
        <div className="benefit-item">
          <h3>Streamlined Operations</h3>
          <p>Simplifies feedback and rewards, saving time and reducing administrative tasks with an efficient, easy-to-manage system.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
