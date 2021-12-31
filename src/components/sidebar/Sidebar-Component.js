import React, { Component } from 'react';
import { bubble as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }
  render() {
    return (
      <>
        <div className="menu-background">
          <img className="logo-header" src="./img/main_logo.svg" alt="logo"></img>{" "}
        </div>
        <Menu
          className="menu"
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)} pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          customBurgerIcon={
            <img src="img/menu/hamburger-menu.svg" alt="menu" />
          }
          width={"50%"}>
          <Link to="/" className="menu-item active" onClick={() => this.closeMenu()}>
            Home
          </Link>

          <Link to="/about" className="menu-item" onClick={() => this.closeMenu()}>
            About
          </Link>

          <Link to="/product" className="menu-item" onClick={() => this.closeMenu()}>
            Product
          </Link>

          <Link to="/contact" className="menu-item" onClick={() => this.closeMenu()}>
            Contact
          </Link>

          <a className="contact-no" href="tel:9579611239" onClick={() => this.closeMenu()}>
            9579611239
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
  }
}
