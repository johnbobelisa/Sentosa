import React from "react";
import "./NavBar.css";
import SeppLogo from "../assets/sepp-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/Sentosa/"><img src={SeppLogo} alt="Logo" className="navbar-logo" /></a>

        {/* Directly show 'Products' and 'Industries' without a dropdown */}
        <div className="navbar-AboutUs">
          <a href="#about-us">About Us</a>
        </div>

        <div className="navbar-services">
          <a href="#Services">Services</a>
        </div>

        <div className="navbar-products">
          <a href="#Products">Products</a>
        </div>

        <div className="navbar-collaborations">
          <a href="#Collaborations">Collaborations</a>
        </div>

        
      </div>

      <div className="navbar-right">
        <div className="navbar-aboutus">
          <a href="https://drive.google.com/file/d/1gqUm6Uk5UwCNokJdCHvo7uXDfl_TZu6i/view?usp=sharing">Company Profile (.pdf)</a>
        </div>
      
        <div className="navbar-contact">
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
