import React from 'react';
import Topper from './Topper/Topper';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import './Wrapper.css';

function Wrapper () {
    return (
      <div className='wrapper-wrapper'>
        <Topper />
        <Content />
        <Footer />
      </div>
    );
}

export default Wrapper;