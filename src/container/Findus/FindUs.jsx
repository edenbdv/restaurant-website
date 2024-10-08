import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}}>Find Us</h1>
      <div className='app__wrapper-content'>
          <p className='p__opensans'>78 Ben Yehuda Street,Tel Aviv-Yafo</p>
          <p className='p__cormorant' style={{color:"#DCCA87",margin: '2rem 0'}}>Opening Hours</p>
          <p className='p__opensans'>Sun - Thu: 11:00 AM - 11:00 PM</p>
          <p className='p__opensans'>Fri - Sat: 12:00 PM - 12:00 AM</p>
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus"/>
    </div>

  </div>
);

export default FindUs;
