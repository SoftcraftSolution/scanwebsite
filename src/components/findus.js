import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './findus.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 19.3661, // Replace with the latitude for your location
  lng: 72.8130  // Replace with the longitude for your location
};

const FindUs = () => {
  return (
    <section id='find-us' className="find-us-section">
      <div className="find-us-text">
        <h2>Find Us</h2>
        <p>Find ScanStars at your favorite shops and restaurants—just look for our QR code!</p>
      </div>
      <div className="find-us-map">
        <LoadScript googleMapsApiKey="AIzaSyBd4z2gXxOiMPdtXS31nlQmaYeBGgguAxw">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default FindUs;
