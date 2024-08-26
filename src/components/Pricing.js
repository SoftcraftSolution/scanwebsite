import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id='pricing' className="pricing">
      <h2>Buy QR Code Stand</h2>
      <p>Quickly And Effortlessly Create Tasks To Stay Organized<br></br> And On Track With Your Goals</p>
      <div className="pricing-card">
        <h3>₹1999 <span>Only /-</span></h3>
        <p>For Team Collaboration With Advanced<br></br> Features.</p>
        <ul>
          <li> Dashboard Insights: Track coupon activity and review feedback in detail.</li>
          <li> 24/7 Support: Our team is always available to assist.</li>
          <li> Free Setup: Installation and maintenance are included.</li>
          <li> One-Time Cost: A single investment with long-term benefits.</li>
        </ul>
        <button>Order Now</button>
      </div>
    </section>
  );
};

export default Pricing;
