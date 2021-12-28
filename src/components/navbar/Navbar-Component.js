import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => (
  <div>
    <header className="navbar">
      <div className="navbar_logo">
        <a className="navbar-logo" href="https://devakrut.netlify.app/">
          <img
            className="navbar-logo"
            src="img/navbar/logo.svg"
            alt="logo"
          ></img>
        </a>
      </div>
      <div className="navbar_item">
        {" "}
        <Link to="/about" className="menu-item">
          About
        </Link>
      </div>
      <div className="navbar_item">
        <Link to="/product" className="menu-item">
          Product
        </Link>
      </div>
      <div className="navbar_item">
        <Link to="/contact" className="menu-item">
          Contact
        </Link>
      </div>
      <div className="navbar_item">
        {" "}
        <a className="menu-item" href="tel:9579611239">
          9579611239
        </a>
      </div>
      <div className="navbar-social-media-logo">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img
            src="/img/navbar/instagram.svg"
            alt="Insta"
            className="smicon-navbar"
          ></img>
        </a>
      </div>
      <div className="navbar-social-media-logo">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img
            src="/img/navbar/facebook.svg"
            alt="Fb"
            className="smicon-navbar"
          ></img>
        </a>
      </div>
    </header>
  </div>
);

export default NavBar;
