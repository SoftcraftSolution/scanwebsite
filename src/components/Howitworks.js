import React from 'react';
import './Howitworks.css';
import phoneImage from './howitwork.png';
import scanIcon from './qrgold.png';
import reviewIcon from './feedbackgold.png'; 
import rewardIcon from './rewardgold.png'; 

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
              <img src={scanIcon} alt="Scan QR" className="step-icon" />
              <div className="step-content">
                <h3>Scan QR</h3>
                <p>Customers simply scan the QR code from ScanToReview to begin their feedback process.</p>
              </div>
            </div>
            <div className="step">
              <img src={reviewIcon} alt="Review" className="step-icon" />
              <div className="step-content">
                <h3>Review</h3>
                <p>After scanning, customers leave a review, sharing their experience and thoughts.</p>
              </div>
            </div>
            <div className="step">
              <img src={rewardIcon} alt="Reward" className="step-icon" />
              <div className="step-content">
                <h3>Reward</h3>
                <p>Positive reviews earn customers rewards that can be redeemed at the same location.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
