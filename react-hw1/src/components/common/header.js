import React, { Component } from 'react';
import { Link } from 'react-router';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div id="nav-menu">
          <Link to={"/"}>Main Page</Link>
        </div>
      </header>
    )
  }
};

export default Header;