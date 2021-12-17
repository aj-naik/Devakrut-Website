import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
    // Pass on our props
    <>
      <div className="menu-background"></div>
      <Menu {...props} className="menu">
        <Link to="/" className="menu-item active">Home</Link>

        <Link to="/product" className="menu-item">Product</Link>

        <Link to="/about" className="menu-item">About</Link>

        <Link to="/contact" className="menu-item">Contact</Link>

        <a className="contact-no" href="tel:9579611239">
          (+91) 9579611239
        </a>

        <div className="menu-item">
          <div className="menu-item-icon">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/sidebar/instagram.svg" alt="instagram" />
            </a>
          </div>

          <div className="menu-item-icon">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/sidebar/facebook.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default Sidebar;
