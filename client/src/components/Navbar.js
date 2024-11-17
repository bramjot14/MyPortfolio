import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/* Used Link in place of "a" for links due to its prevention from full page reload whcih is essential for SPA 
 (Single Page Application) especiallly in deployed website */
function Navbar() {
  return (
    <nav className="navStyle">
      <ul className="navListStyle">
        <li className="navItemStyle">
          <Link to="/" className="linkStyle">Home</Link>
        </li>
        <li className="navItemStyle">
          <Link to="/about" className="linkStyle">About</Link>
        </li>
        <li className="navItemStyle">
          <Link to="/contact" className="linkStyle">Contact</Link>
        </li>
        <li className="navItemStyle">
          <Link to="/github" className="linkStyle">GitHub</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


