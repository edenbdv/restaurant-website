import React from 'react';
import './Header.css';

import {images} from '../../constants';
import {SubHeading} from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home" >
    <div className='app__wrapper_info'>
      <SubHeading  title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0rem' }}>
  We believe that fine dining is a journey to the heart of Italy. Our talented chefs expertly blend traditional recipes with fresh, locally sourced ingredients to create dishes that celebrate authentic Italian flavors. From handcrafted pasta to exquisite desserts, each meal is a testament to our passion for quality and culinary excellence. 
      </p>
      <a href="#specialmenu">
      <button type='button' className='custom__button'>Explore Menu</button>
      </a>
    </div>

    <div className='app__wrapper_img'>
    <img className='app__welcome_img' src={images.welcome2} alt="Welcome" />
    </div>

    
  </div>
);

export default Header;
