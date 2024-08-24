import React from 'react';
import './Howitworks.css';
import phoneImage from './howitwork.png';
import Poster from './Poster.png' // Ensure the correct path to your image

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-image">
          <img src={phoneImage} alt="How it works demo" className="phone-image" />
        </div>
        <div className="how-it-works-content">
          <h2>How does this work?</h2>
          <p>Discover the Simple and Effective Steps to Engage and Reward Your Customers Effortlessly.</p>
          <div className="steps">
            <div className="step">
              <h3>Scan QR</h3>
              <p>Customers simply scan the QR code from ScanToReview to begin their feedback process.</p>
            </div>
            <div className="step">
              <h3>Review</h3>
              <p>After scanning, customers leave a review, sharing their experience and thoughts.</p>
            </div>
            <div className="step">
              <h3>Reward</h3>
              <p>Positive reviews earn customers rewards that can be redeemed at the same location.</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HowItWorks;
