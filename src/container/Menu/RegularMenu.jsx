import React from 'react';

import './RegularMenu.css';
import {data} from '../../constants';
import {SubHeading, MenuItem} from '../../components';

const regularMenu = ({onClose}) => (
    <div className='app__regularlMenu flex__center section__padding' id="menu"> 
      <div className='app__regularlMenu-title'>
        <SubHeading title="Buon Appetito"/>
        <h1 className='headtext__cormorant'>Our Menu</h1>
      </div>
  
      <div className="app__regularMenu-menu">
        {/* Iterate over the categories in the menu object */}
        {Object.keys(data.menu).map((category) => (
          <div key={category} className={`app__regularMenu-menu_category flex__center`}>
            <p className='app__regularMenu-menu_heading'>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            <div className='app__regularMenu_menu_items'>
              {data.menu[category].map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

        

  );
  

export default regularMenu;
