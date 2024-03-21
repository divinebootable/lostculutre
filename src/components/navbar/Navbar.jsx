/* eslint-disable arrow-body-style  */
/* eslint-disable no-unused-vars  */
import React, { useState } from 'react';

import { MenuRounded, CloseRounded } from '@mui/icons-material';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="nav">
      <div className="nav-logo"> Lost-Culture</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Vote</li>
        <li>Register</li>
        <li className="nav-contact">LOG IN</li>
      </ul>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <CloseRounded onClick={() => setToggleMenu(false)} />
        ) : (
          <MenuRounded onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="links">
            <ul className="nav-menu">
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Vote</li>
              <li>Register</li>
              <li className="nav-contact">LOG IN</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
