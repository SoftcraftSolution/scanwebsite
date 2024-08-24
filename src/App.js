import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import HowItWorks from './components/Howitworks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import 'typeface-nunito';
import Poster from './components/Poster';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Poster/>
      <Benefits />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
