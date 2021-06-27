import React from 'react';
import ('./TinyCard.css');

function TinyCard(props) {
  return (
    <div className='tiny'>
      <p className='tiny-title'>{props.title}</p>
      <p className='tiny-text'>{props.count}</p>
    </div>
  );
};

export default TinyCard;