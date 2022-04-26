import React from 'react';
import Footer from '../common/footer';
import AboutSection from './aboutSection.js';
import Header from '../common/header';
function index(props) {
  return (
    <div>
      <Header />
      <AboutSection />
      <Footer/>
    </div>
  );
}

export default index;
