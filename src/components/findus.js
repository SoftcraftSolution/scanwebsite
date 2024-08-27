import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useEffect,useState } from 'react';
import './findus.css';
import axios from 'axios';
import markerIcon from './scanmark.png';



const containerStyle = {
  width: '100%',
  height: '400px'
};

const mapCenter = {
  lat: 19.3661, // Replace with the latitude for your location
  lng: 72.8130  // Replace with the longitude for your location
};

const initialCenter = {
  lat: 19.7515,
  lng: 75.7139,
};




const FindUs = () => {
  const [shops, setShops] = useState([]);
  const fetchShops = async () => {
    try {
      const response = await axios.get('https://ambulance-booking-backend.vercel.app/user/get-all-scanstar-shop');
      setShops(response.data.businesses);
    } catch (error) {
      console.error('Error fetching shop data:', error);
    }
  };
  
  useEffect(() => {
    fetchShops(); // Fetch shops when the component mounts
  }, []);
  return (
    <section id='find-us' className="find-us-section">
      <div className="find-us-text">
        <h2>Find Us</h2>
        <p>Find ScanStars at your favorite shops and restaurants—just look for our QR code!</p>
      </div>
      <div className="find-us-map">
      <LoadScript googleMapsApiKey="AIzaSyB5GV0AxvGQOTRaomj95JE_8k5yejLMVYo">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={10}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
         
          {shops.map((shop, index) => (

            <MarkerF
              key={index}
              position={{ lat: shop.lat, lng: shop.lng }}
              title={shop.businessName}
              icon={{
                url: markerIcon, // Replace with your image URL
                scaledSize: new window.google.maps.Size(80, 80), // Adjust the size as needed
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      </div>
    </section>
  );
};

export default FindUs;
