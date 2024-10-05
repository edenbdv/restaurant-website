import React from 'react';

import './Chef.css';
import {images} from '../../constants'
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'  ></img>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>Our philosophy is simple: cooking is about love and connection.</p>
        </div>
        <p className='p__opensans'>Every dish we create is an expression of that, made with heart and the freshest ingredients.For us, it's not just about food, but about making every meal a moment to remember, something that brings people together in a meaningful way.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign"></img>
      </div>

    </div>
  </div>
);

export default Chef;
