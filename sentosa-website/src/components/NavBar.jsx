import React, { useState } from "react";
import "./NavBar.css"; 
import SeppLogo from "../assets/sepp-logo.png"

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/"><img src={SeppLogo} alt="Logo" className="navbar-logo" /></a>

        <div
          className="navbar-company"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a href="#Company">Company</a>
          {isDropdownOpen && (
            <ul className="dropdown-item-company">
              <li><a href="/products">Products</a></li>
              <li><a href="/industries">Industries</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          )}
        </div>

        <div className="navbar-aboutus">
          <a href="#AboutUs">About Us</a>
        </div>
      </div>

      <div className="navbar-right">
        <div className="navbar-contact">
          <a href="/contacts">Contact</a>
        </div>
        <div className="navbar-search">
          <a href="#Search">Search</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
