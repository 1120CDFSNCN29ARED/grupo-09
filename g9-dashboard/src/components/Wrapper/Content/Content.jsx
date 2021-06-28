import React, { Component } from 'react';
import SmallCard from '../../SmallCard';
import MediumCard from '../../MediumCard';
import '../../../assets/css/app.css';

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
    const resUsers = await fetch('http://localhost:3002/api/users');
    const resUsersJson = await resUsers.json();
    const resUsersData = resUsersJson.data;
    const resProductsData = resProductsJson.data;
    let latest = [];
    this.setState({
      latestData: [],
      productsData: resProductsData,
      usersData: resUsersData,
    });
  
    let newestUser = this.state.usersData.reduce(function (prev, current) {
      if (+current.id > +prev.id) {
        return current;
      } else {
        return prev;
      }
    });
    latest.push(newestUser);
    let latestProduct = this.state.productsData.reduce(function (prev, current) {
      if (+current.id > +prev.id) {
        return current;
      } else {
        return prev;
      }
    });
    latest.push(latestProduct);
    console.log(latest);
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
          {/*this.state.productsData.length > 0 ? (
            this.state.productsData.map((oneProduct, i) => {
              return <MediumCard {...oneProduct} key={i} />
            })
          ) : ((<p>No info</p>))*/}
        </div>
      </div>
    )
  }
};