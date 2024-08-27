import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Herosection.css';
import heroImage from './reduced.png';
import qr from './qr.png';
import find from './findus.png';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Review', 'Reward'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const isEnd = displayedText === currentWord && !isDeleting;

      if (isEnd) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        } else {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        }
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, wordIndex, words]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="scan-to">Scan to&nbsp;</span>
          <span className="review-reward">{displayedText}</span>
        </h1>
        <p>
          ScanStar is a platform created for shops and restaurants to enhance
          customer engagement. Customers scan a QR code, provide feedback, and
          earn rewards that can be redeemed at the same store. Shopkeepers gain
          access to detailed insights, simplified management, and an effective
          way to boost customer satisfaction.
        </p>
        <div className="hero-buttons">
          <Link to="find-us" smooth={true} duration={500}>
            <img className="bb" src={find} alt="Find Us" />
          </Link>
          <Link to="pricing" smooth={true} duration={500}>
            <img className="bb" src={qr} alt="Buy QR" />
          </Link>
        </div>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </section>
  );
};

export default HeroSection;
