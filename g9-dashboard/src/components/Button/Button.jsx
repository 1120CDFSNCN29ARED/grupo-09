import React from 'react';
import './Button.css';

export default function Button(props) {

  const highlighted = function (e) {
    e.target.style.background = '#ed4b41';
    e.target.style.color= 'black';
  }
  const notHighlighted = function(e) {
    e.target.style.background = '#292925';
    e.target.style.color= 'white';
  }
  return (
    <div className='button-div'>
      <button className='create-button' onMouseEnter={highlighted} on onMouseOut={notHighlighted}>{props.children}</button>
    </div>
  )
};
