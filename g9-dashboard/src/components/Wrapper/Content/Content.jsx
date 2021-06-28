import React, { Component } from 'react';
import SmallCard from '../../SmallCard';
import MediumCard from '../../MediumCard';
import '../../../assets/css/app.css';

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
      productsData: [],
    };
  }
  async componentDidMount() {
    const resProducts = await fetch('http://localhost:3002/api/products');
    const resProductsJson = await resProducts.json();
    const resUsers = await fetch('http://localhost:3002/api/users');
    const resUsersJson = await resUsers.json();
    const resUsersData = resUsersJson.data;
    const resProductsData = resProductsJson.data;

    this.setState({
      usersData: resUsersData,
      productsData: resProductsData,
    });
    let latest = [];
  }
  
  render() {


    return (
      <div className='content'>
        <div className='latest'>

{  /*        {this.latest.length > 0 ? (
            this.latest.map((oneLatest, i) => {
              return <SmallCard {...oneLatest} key={i} />
            })
          ) : ((<p>No info</p>))}*/}

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