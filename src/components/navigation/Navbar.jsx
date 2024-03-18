import React, { useState } from 'react';

import { MenuRounded, CloseRounded } from '@mui/icons-material';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="kutora__navbar">
      <div className="kutora__navbar-links_logo logo">
        <span className="text">Kutora</span>
        <span className="dot">.</span>
      </div>
      <div className="kutora__navbar-links">
        <div className="kutora__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          {/* <p>
            <a href="#about">About</a>
          </p> */}
          <p>
            <a href="#features">About</a>
          </p>
          {/* <p>
            <a href="#faq" className="gradient__text">
              FAQ
            </a>
          </p> */}
          <p>
            <a href="#contact">Voting</a>
          </p>
          <p>
            <a href="#contact">Shop</a>
          </p>
        </div>
      </div>
      <div className="kutora__navbar-sign">
        <p>Login</p>
        <button type="button">Sign up</button>
      </div>
      <div className="kutora__navbar-menu">
        {toggleMenu ? (
          <CloseRounded color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <MenuRounded color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="kutora__navbar-menu_container scale-up-center">
            <div className="kutora__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">About</a>
              </p>
              <p>
                <a href="#features">Features</a>
              </p>
              {/* <p>
                <a href="#faq">FAQ</a>
              </p> */}
              <p>
                <a href="#contact">Contact</a>
              </p>
            </div>
            <div className="kutora__navbar-menu_container-links-sign">
              <p>Login</p>
              <button type="button">Try for Free</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
