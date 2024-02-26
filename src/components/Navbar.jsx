import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
const Navbar = () => {
  return (
    <nav id="nav-menu-container">
    <ul className="nav-menu">
      <li >
      <Link to="/">Home</Link></li>
      <li><Link to='/team'>Team</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/newsletter">NewsLetter</Link></li>
      <li><Link to="/magazine">Magazine</Link></li>
      <li><Link to="/contact">Contact</Link></li>

      <li className="buy-tickets"><Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSczXQK-AuWDGv13yABEy8Y8RpSc5_Uuf4e57wK2KsQCQbQPDw/viewform?usp=sf_link" target="_blank">Register
          Now</Link></li>
    </ul>
    
  </nav>
  );
};

export default Navbar;
