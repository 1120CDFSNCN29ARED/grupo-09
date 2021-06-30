import React, { Component } from 'react';
import('./MediumCard.css');

export default class MediumCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneProduct: props,
      pic: '',
    };
  };
  /*async*/ componentDidMount() {
 /*  let productImage = await fetch('http://localhost:3002/api/products/img/' + this.props.id);
   console.log('IMG',productImage.body)*/
    fetch('http://localhost:3002/api/products/img/' + this.props.id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let picInfo = process.env.REACT_APP_BASE_URL + data;
      this.setState({  pic: picInfo })
    });
    console.log('URL', this.state.pic)

  };
  render() {

    return (
      <div className='med-card'>
        <p className='med-card-title'>{this.state.oneProduct.name}</p>
        <img className='med-card-img' src={this.state.pic} alt='Product' />
        <div>{this.state.pic}</div>

        <p className='med-card-text'>{this.state.oneProduct.price}</p>
      </div>
      /* BUTTONS: view( to 'big card'), edit( to 'create product' pre-populated form) */
    )
  }
};

