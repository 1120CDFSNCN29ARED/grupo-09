import React, { Component } from 'react';
import TinyCard from '../../components/TinyCard';
import logo from '../../assets/img/logo_grey_cropped.png';
import './Topper.css';

export default class Topper extends Component {
  constructor() {
    super();
    this.state = {
      totals: [],
    };
  }
  async componentDidMount() {
    const resProducts = await fetch('http://localhost:3002/api/products');
    const resProductsJson = await resProducts.json();
    const resUsers = await fetch('http://localhost:3002/api/users');
    const resUsersJson = await resUsers.json();

    this.setState({
      totals: [{ title: 'products', count: resProductsJson.count }, { title: 'users', count: resUsersJson.count }]
    });
  }

  render() {
    return (
      <div className='topper'>
        <div className='logo'>
          <img src={logo} alt='logo' className='logo-img' />
        </div>
        <div className='totals'>
          {this.state.totals.length > 0 ? (
            this.state.totals.map((oneTotal, i) => {
              return <TinyCard {...oneTotal} key={i} />
            })
          ) : ((<p>No info</p>))}
        </div>
      </div>
    )
  }
};

