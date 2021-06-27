import React from 'react';
import Topper from './Topper/Topper';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import '../../assets/css/app.css';

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