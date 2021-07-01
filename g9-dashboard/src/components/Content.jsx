import React, { Component } from 'react';
import './Content.css';
import SmallCard from './SmallCard';
import MediumCard from './MediumCard';

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      latestData: [],
      productsData: [],
      usersData: [],
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
        </div>

        <div className='all-products'>
          <p className='all-products-title'>All Products</p>
          {this.state.productsData.length > 0 ? (
            this.state.productsData.map((oneProduct, i) => {
              return <MediumCard {...oneProduct} key={i} />
            })
          ) : ((<p>No info</p>))}
        </div>

        {/* create product button */}
      </div>
    )
  }
};