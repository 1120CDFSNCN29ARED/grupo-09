import React, { Component } from 'react';
import './Content.css';
import SmallCard from '../../components/SmallCard/SmallCard';
import MediumCard from '../../components/MediumCard/MediumCard';
import Button from '../../components/Button/Button';

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      latestData: [],
      productsData: [],
      usersData: [],
      buttons: [],
    };
  }
  async componentDidMount() {
    const resProducts = await fetch('http://localhost:3002/api/products');
    const resProductsJson = await resProducts.json();
    const resProductsData = resProductsJson.data;
    const resUsers = await fetch('http://localhost:3002/api/users');
    const resUsersJson = await resUsers.json();
    const resUsersData = resUsersJson.data;
    let latest = [];
    const buttons = ['All Users', 'All Products', 'Create Product'];

    let newestUser = resUsersData.reduce(function (prev, current) {
      if (+current.id > +prev.id) {
        return current;
      } else {
        return prev;
      }
    });
    newestUser.title = 'Newest User';
    let latestProduct = resProductsData.reduce(function (prev, current) {
      if (+current.id > +prev.id) {
        return current;
      } else {
        return prev;
      }
    });
    latestProduct.title = 'Latest Product';
    latest.push(newestUser, latestProduct);

    this.setState({
      latestData: latest,
      productsData: resProductsData,
      usersData: resUsersData,
      buttons: buttons,
    });
  }

  render() {

    return (
      <div className='content'>
        <div className='latest'>
          {this.state.latestData.length > 0 ? (
            this.state.latestData.map((oneLatest, i) => {
              return <SmallCard {...oneLatest} key={i} />
            })
          ) : ((<p>No info</p>))}

          {this.state.buttons.length > 0 ? (
            this.state.buttons.map((oneButton, i) => {
              return <Button>{oneButton}</Button>
            })
          ) : ('')}
        </div>

        <div className='all-products'>
          <p className='all-products-title'>All Products</p>
          {this.state.productsData.length > 0 ? (
            this.state.productsData.map((oneProduct, i) => {
              return <MediumCard {...oneProduct} key={i} />
            })
          ) : ((<p>No info</p>))}
        </div>

      </div>
    )

  }
};