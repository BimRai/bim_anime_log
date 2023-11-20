import React from 'react'
import logo from  '../images/bal_logo2.png'

function Nav() {
    return (
        <nav className={`navbar`}>
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links`}>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="watching">WATCHING</a>
            </li>
            <li>
              <a href="watched">WATCHED</a>
            </li>
            <li>
              <a href="towatch">TO WATCH</a>
            </li>
            <li>
              <a href="socials">SOCIALS</a>
            </li>
            <li>
              <a href="signup">SIGN UP</a>
            </li>
            <li>
              <a href="login">LOG IN</a>
            </li>
          </ul>
        </nav>
      );
    };

export default Nav
