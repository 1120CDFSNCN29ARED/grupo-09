import React from 'react';
import Topper from './Topper';
import Content from './Content';
import Footer from './Footer';
import '../assets/css/app.css';

function Wrapper () {
    return (
      <div id='wrapper-wrapper'>
        <Topper />
        <Content />
        <Footer />
      </div>
    );
}

export default Wrapper;