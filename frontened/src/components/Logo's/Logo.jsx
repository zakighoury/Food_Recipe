import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Logo.scss";
import AppContainer from "../AppContainer/AppContainer";

function Logo() {
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    const fetchLogoImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/partners');
        setPartner(response.data);
      } catch (error) {
        console.error('Error fetching logo images:', error);
      }
    };

    fetchLogoImages();
  }, []);

  return (
    <AppContainer>
      <div className='logo'>
        {partner.map((partner, index) => (
          <div className='logo' key={index}>  
          <img className='logo-image' src={partner.imageUrl1} alt="" />
          <img className='logo-image' src={partner.imageUrl2} alt="" />
          <img className='logo-image' src={partner.imageUrl3} alt="" />
          <img className='logo-image' src={partner.imageUrl4} alt="" />
          <img className='logo-image' src={partner.imageUrl5} alt="" />
          <img className='logo-image' src={partner.imageUrl6} alt="" />
          </div>
        ))}
      </div>
    </AppContainer>
  );
}

export default Logo;
