import React, { Component } from 'react';
import { bubble as Menu } from "react-burger-menu";
//import styles from "../../../styles/Sidebar.module.css";
import Link from 'next/link';

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
          <Link href="/" passHref>
            <a className="menu-item" onClick={() => this.closeMenu()}>Home</a>
          </Link>

          <Link href="/about" passHref>
            <a className="menu-item" onClick={() => this.closeMenu()}>About</a>
          </Link>

          <Link href="/product" passHref>
            <a className="menu-item" onClick={() => this.closeMenu()}>Product</a>
          </Link>

          <Link href="/contact" passHref>
            <a className="menu-item" onClick={() => this.closeMenu()}>Contact</a>
          </Link>

          <Link href="tel:9579611239" passHref>
            <a className="contact-no" onClick={() => this.closeMenu()}>9579611239</a>
          </Link>

          <div className="menu-item">
            <div className="menu-item-icon">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/sidebar/instagram.svg" alt="instagram" />
              </Link>
            </div>

            <div className="menu-item-icon">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/sidebar/facebook.svg" alt="facebook" />
              </Link>
            </div>
          </div>
        </Menu>
      </>
    );
  }
}
