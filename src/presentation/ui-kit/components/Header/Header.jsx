import React from 'react';
import '../Header/header.scss';
import logo from '../Header/logo.png';

function Header() {
  return (
    <div className="head">
      <ul>
        <li>
          <a href="" className="logo">
            <img src={logo} alt="" />
          </a>
        </li>
        <li className="link">
          <a href="" className="link">
            Card
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
