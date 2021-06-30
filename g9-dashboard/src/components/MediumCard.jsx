import React, { Component } from 'react';
import('./MediumCard.css');

export default class MediumCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneProduct: props,
    };
  };
  async componentDidMount() {
   let productImage = await fetch('http://localhost:3002/api/products/img/' + this.props.id);
   console.log('IMG',productImage.body)

  };
  render() {

    return (
      <div className='med-card'>
        <p className='med-card-title'>{this.state.oneProduct.name}</p>
        <img className='med-card-img' src={this.state.productImage} alt='Product' />

        <p className='med-card-text'>{this.state.oneProduct.price}</p>
      </div>
      /* BUTTONS: view( to 'big card'), edit( to 'create product' pre-populated form) */
    )
  }
};

