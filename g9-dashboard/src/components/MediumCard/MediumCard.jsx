import React from 'react';
import('./MediumCard.css');

function MediumCard(props) {
    return (
      <div className='med-card'>
        <p className='med-card-title'>{props.name}</p>
        <p className='med-card-text'>${props.unitPrice}</p>
        <img className='med-card-img' src={props.image} alt='Product' />
      </div>
      /* BUTTONS: view( to 'big card'), edit( to 'create product' pre-populated form) */
    )
};

export default MediumCard;
