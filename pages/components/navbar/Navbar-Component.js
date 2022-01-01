import React from "react";
import Link from "next/link";

const NavBar = () => (
  <div>
    <header className="navbar">
      <div className="navbar_logo">
        <Link href="/" passHref={true}>
          <img
            className="navbar-logo"
            src="img/navbar/logo.svg"
            alt="logo"
          ></img>
        </Link>
      </div>
      <div className="navbar_item">
        {" "}
        <Link href="/about" passHref={true}>
          <a className="menu-item-navbar">About</a>
        </Link>
      </div>
      <div className="navbar_item" passHref={true}>
        <Link href="/product" className="menu-item-navbar">
          <a className="menu-item-navbar">Product</a>
        </Link>
      </div>
      <div className="navbar_item" passHref={true}>
        <Link href="/contact" className="menu-item-navbar">
          <a className="menu-item-navbar">Contact</a>
        </Link>
      </div>
      <div className="navbar_item" passHref={true}>
        {" "}
        <Link href="tel:9579611239">
          <a className="menu-item-navbar">9579611239</a>
        </Link>
      </div>
      <div className="navbar-social-media-logo">
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          passHref={true}
        >
          <img
            src="/img/navbar/instagram.svg"
            alt="Insta"
            className="smicon-navbar"
          ></img>
        </Link>
      </div>
      <div className="navbar-social-media-logo">
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          passHref={true}
        >
          <img
            src="/img/navbar/facebook.svg"
            alt="Fb"
            className="smicon-navbar"
          ></img>
        </Link>
      </div>
    </header>
  </div>
);

export default NavBar;
