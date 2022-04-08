import React from 'react';
import Footer from '../common/footer';

import Header from '../common/header';
import PortfolioSection from './portfolioSection.js';
function index(props) {
  return (
    <div>
      <Header />
      <PortfolioSection/>
      <Footer/>
    </div>
  );
}

export default index;
