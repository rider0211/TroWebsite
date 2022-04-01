import React from 'react';
import Footer from '../common/footer';

import Header from '../common/header';
import PageBackground from './pageBackground';
import StartupSection from './startupSection.js';
function index(props) {
  return (
    <div>
      <Header />
      <PageBackground/>
      <StartupSection/>
      <Footer/>
    </div>
  );
}

export default index;
