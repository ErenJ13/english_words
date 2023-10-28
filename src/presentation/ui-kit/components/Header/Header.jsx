import React from 'react';
import '../Header/header.scss';

function Header() {
  return (
    <div className="head">
      <ul>
        <li className="logo"></li>
        <li className="link">
          <a className="link" href="">
            Card
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
