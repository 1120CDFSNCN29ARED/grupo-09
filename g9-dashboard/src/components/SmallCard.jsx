import React from 'react';
import('./SmallCard.css');

function SmallCard(props) {
  return (
    <div className='small-card'>
      <img className='small-card-img' src={props.img} alt='Latest and newest' />
      <p className='small-card-text'>{props.name}</p>
    </div>
  );
};

export default SmallCard;