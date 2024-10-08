import React from 'react';

import './SpecialMenu.css';
import {images, data} from '../../constants';

import {SubHeading, MenuItem} from '../../components';

const SpecialMenu = ({ onViewMoreClick, buttonText }) => (
  <div className='app__specialMenu flex__center section__padding' id="specialmenu">
    <div className='app__specialMenu-title'>
      <SubHeading title="Happy Hour"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div class="app__specialMenu-menu">
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specicalMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specicalMenu_menu_items'>
          {data.wines.map((wine, index) => (
           <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="menu img"></img>
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specicalMenu-menu_heading'>Cocktails</p>
        <div className='app__specicalMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
           <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>

    <div >
          <button type='button' className='custom__button' onClick={onViewMoreClick}>{buttonText}</button>
    </div>

  </div>
);

export default SpecialMenu;
