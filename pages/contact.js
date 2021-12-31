import React from "react";
import SideBar from "./components/sidebar/Sidebar-Component";
import NavBar from "./components/navbar/Navbar-Component";
import Footer from "./components/footer/Footer-Component";
import { useMediaQuery } from "react-responsive";
import Head from 'next/head'

export default function ContactPage() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <>
      <div className="container">
        <Head>
          <title>Devakrut Oils</title>
          <link rel="icon" href="/main_logo.svg" />
        </Head>
      </div>

      <div id="page-wrap">
        {isDesktopOrLaptop && <NavBar />}
        {!isDesktopOrLaptop && (
          <SideBar
            pageWrapId={"page-wrap"}
            outerContainerId={"App"}
            customBurgerIcon={
              <img src="img/menu/hamburger-menu.svg" alt="menu" />
            }
            width={"50%"}
          />
        )}

        <div className="main-contact-page">
          <img
            className="ellipse-container"
            id="ellipse"
            src="img/contactpage/ellipse6.svg"
            alt="ellipse"
          />
          <img
            className="ellipse-container-desk"
            id="ellipse-desk"
            src="img/contactpage/ellipse7.svg"
            alt="ellipse desk"
          />

          <div className="container">
            <div className="contact-box">
              <div className="box-title">Leave Us a Message</div>
              <div className="box-subtitle">
                Attending your queries is our pleasure!
              </div>
              <div className="form">
                <div className="form-component">
                  <label htmlFor="Name" className="label-name">
                    Name
                  </label>
                  <input type="text" className="data"></input>
                </div>
                <div className="form-component">
                  <label htmlFor="E-mail" className="label-name">
                    E-mail
                  </label>
                  <input type="text" className="data"></input>
                </div>
                <div className="form-component">
                  <label htmlFor="Phone Number" className="label-name">
                    Phone Number
                  </label>
                  <input type="text" className="data"></input>
                </div>
                <div className="form-component">
                  <label
                    htmlFor="Message"
                    className="label-name"
                    id="text-area"
                  >
                    Message
                  </label>
                  <textarea type="text" className="data-2"></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </div>
            <div className="right-content">
              <div className="contact-image-container">
                <img
                  className="image-contact"
                  id="image-contact"
                  src="img/contactpage/img1.svg"
                  alt="store-1"
                />
                <div className="image-row2">
                  <img
                    className="image-contactrow-1"
                    src="img/contactpage/img2.svg"
                    alt="store-2"
                  />
                  <img
                    className="image-contactrow-2"
                    src="img/contactpage/img3.svg"
                    alt="3"
                  />
                </div>
              </div>
              <div className="footer-content contact-details">
                <span className="footer-details ts-0">
                  <a
                    className="details-black"
                    href="https://goo.gl/maps/rNA2nxyHudL4E9rF7"
                  >
                    <img
                      src="/img/footer/pin.svg"
                      alt="Map"
                      className="icon"
                    ></img>
                    Shop No 4, Sagar Sanidhya Court Road, Alibaug-Akshi Ferry,
                    Alibag, Maharashtra 402201
                  </a>
                </span>
                <span className="footer-details ts-0">
                  <a
                    className="details-black"
                    href="mailto://info@devakrut.com"
                  >
                    <img
                      src="/img/footer/gmail.svg"
                      alt="gmail"
                      className="icon"
                    ></img>
                    www.devakrut.com | info@devakrut.com
                  </a>
                </span>
                <span className="footer-details ts-0">
                  <a className="details-black" href="tel://9579611239">
                    <img
                      src="/img/contactpage/contact-vector.svg"
                      alt="phone"
                      className="icon"
                      id="contact-phoneicon"
                    ></img>
                    <div className="details-text-black">9579611239</div>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
