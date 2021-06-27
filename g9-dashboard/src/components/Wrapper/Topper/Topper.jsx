import React from 'react';
import logo from '../../../assets/img/logo_grey_cropped.png';
import '../../../assets/css/app.css';

function Topper(props) {
  return (
    <div id='topper'>
      <div id='logo'>
        <img src={logo} alt='logo'id='logo-img'/>
      </div>
      <div id='totals'>

      </div>
    </div>
  );
}

export default Topper;