import React from "react";
import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer">
      <div className="content">
        <div className="left-content">
        <div className="title-logo">
          <a href="https://devakrut.netlify.app/">
            <img
              className="logo"
              src="./img/footer/Devakrut_LOGO_1 1.svg"
              alt="logo"
            ></img>{" "}
          </a>
        </div>
        <div className="footer-description">
          <p className="para-text">
            We are manufacturer of Cold press oil. You will get 100% pure Cold
            pressed Groundnut Oil, Coconut Oil, Sesame Oil (Teel) , Safflower
            Oil (Kardai) , Almond Oil.
          </p>
        </div>
        <div className="footer-content">
          <span className="footer-details">
            <a className="details" href="https://goo.gl/maps/rNA2nxyHudL4E9rF7">
              <img src="/img/footer/pin.svg" alt="Map" className="icon"></img>
              Shop no 4 , Sagar Sanidhya Court Road, Alibaug-Akshi Ferry,
              Alibag, Maharashtra 402201
            </a>
          </span>
          <span className="footer-details">
            <a className="details" href="mailto://info@devakrut.com">
              <img
                src="/img/footer/gmail.svg"
                alt="gmail"
                className="icon"
              ></img>
              www.devakrut.com | info@devakrut.com
            </a>
          </span>
          <span className="footer-details">
            <a className="details" href="tel://9579611239">
              <img
                src="/img/footer/phone.svg"
                alt="phone"
                className="icon"
              ></img>
              <div className="details-text">9579611239</div>
            </a>
          </span>
        </div>
        </div>
        <div className="quick-links">
          <div className="quick-link-title">Quick Links</div>
          <div className="footer-navbar">
            <a className="page-links" href="https://devakrut.netlify.app/">Home</a>
            <a className="page-links" href="https://devakrut.netlify.app/">Products</a>
            <a className="page-links" href="https://devakrut.netlify.app/">About Us</a>
            <a className="page-links" href="https://devakrut.netlify.app/">Contact Us</a>
          </div>
        </div>
        <div className="social-media">
          <span className="follow-us">Follow Us</span>
          <div className="social-media-logo">
            <a
              className="smicon"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/footer/instagram.svg" alt="Map"></img>
            </a>
            <a
              className="smicon"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/footer/facebook.svg" alt="Map"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
