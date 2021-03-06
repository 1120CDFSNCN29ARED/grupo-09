import React from 'react';
import('./SmallCard.css');

function SmallCard(props) {
  return (
    <div className='small-card'>
      <p className='small-card-title'>{props.title}</p>
      <img className='small-card-img' src={props.image} alt='Newest and Latest' />
      <p className='small-card-text'>{props.name ? props.name : props.names}</p>
    </div>
  );
};

export default SmallCard;