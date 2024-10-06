import React from 'react';

import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu, RegularMenu } from './container';
import { Navbar } from './components';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [showRegularMenu, setShowRegularMenu] = useState(false);

  const handleViewMoreClick = () => {
      setShowRegularMenu(!showRegularMenu);
    };

  return(
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu onViewMoreClick={handleViewMoreClick} buttonText={showRegularMenu ? 'Show Less' : 'View More'} />
    {showRegularMenu && <RegularMenu />}
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
  </div>
)};

export default App;
