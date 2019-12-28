import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <h2>My Blog</h2>
      <nav>
        <NavLink className='navLink' exact activeClassName='active' to='/'>
          Home
        </NavLink>
        <NavLink className='navLink' activeClassName='active' to='/posts/add'>
          Add
        </NavLink>
        <NavLink className='navLink' activeClassName='active' to='/about'>
          About
        </NavLink>
        <NavLink className='navLink' activeClassName='active' to='/contacts'>
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;