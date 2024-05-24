
import React from 'react';
import logo from '../../images/Logo.svg';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='navbar'>
        <nav>
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/inventory">Manage Inventory</a>
        </nav>
        <div className="search-bar">
          <input type="text" name="" id="" placeholder='Type Product Name..' />
          <input type="submit" value="Search" />
        </div>
      </div>
    </header>
  );
}

export default Header;