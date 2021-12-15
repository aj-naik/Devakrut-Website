import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props} className="menu">
      <a className="menu-item active" href="#home">
        Home
      </a>

      <a className="menu-item" href="#product">
        Product
      </a>

      <a className="menu-item" href="#about">
        About
      </a>

      <a className="menu-item" href="#contact">
        Contact
      </a>

      <a className="contact-no" href="tel:9579611239">(+91) 9579611239</a>

      <div className="menu-item">
        <div className="menu-item-icon">
          <a href="https://www.instagram.com/">
            <img src="/img/sidebar/instagram.svg" />
          </a>
        </div>

        <div className="menu-item-icon">
          <a href="https://www.facebook.com/">
            <img src="/img/sidebar/facebook.svg" />
          </a>
        </div>
      </div>
    </Menu>
  );
};
