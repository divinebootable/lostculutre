import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links_logo logo">
        <span className="text">LOST-CULTURE</span>
        <span className="dot">.</span>
      </div>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="home">Home</Link>
          </p>
          <p>
            <Link to="about">About</Link>
          </p>
          <p>
            <Link to="contact">Contact</Link>
          </p>
          <p>
            <Link to="votingcategory">Vote Now</Link>
          </p>
          <p>
            <Link to="shop">Shop</Link>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Register</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <Link to="home">Home</Link>
              </p>
              <p>
                <Link to="about">About</Link>
              </p>
              <p>
                <Link to="contact">Contact</Link>
              </p>
              <p>
                <Link to="votingcategory">Vote Now</Link>
              </p>
              <p>
                <Link to="shop">Shop</Link>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>
                <Link to="login">Sign in</Link>
              </p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
