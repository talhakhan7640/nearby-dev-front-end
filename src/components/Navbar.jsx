import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar container mx-auto">
      <div className="logo flex">
        <img src={logo} alt="" srcset="" className="logo-image" />
        <h1 className="text-white font-black text-4xl ml-3">typo</h1>
      </div>
      <div className="menu-section">
        <ul className="menu-items">
          <Link to="/regsiter">
            <li>Signup</li>
          </Link>

          <span className="or">OR</span>
          <Link to="/users/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar