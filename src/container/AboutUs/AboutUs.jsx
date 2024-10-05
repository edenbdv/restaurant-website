import React from 'react';

import './AboutUs.css';
import {images} from '../../constants';


const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about" >
    <div className='app__aboutus-overlay flex__center'>
      <img src = {images.G} alt="g letter"></img>
    </div>

    <div className='app__aboutus-content flex__center'> 

      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon } alt="about_spoon" className='spoon__img'></img>
        <p className='p__opensans'>At Gusto di Italia, we celebrate the rich flavors and traditions of Italian cuisine, crafting each dish with the freshest ingredients and a passion for authenticity.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_olive flex__center'>
        <img src={images.olive} alt="about_olive" ></img>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon } alt="about_spoon" className='spoon__img'></img>
        <p className='p__opensans'>Founded with a deep love for Italian tradition, our restaurant began as a family-owned trattoria, passed down through generations, preserving commitment to culinary excellence.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
