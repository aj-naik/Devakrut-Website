import React from "react";
import Image from "next/image";

import elipse6 from "../public/img/contactpage/ellipse6.svg";
import elipse7 from "../public/img/contactpage/ellipse7.svg";

import img1 from "../public/img/contactpage/img1.svg";
// import img2 from "../public/img/contactpage/img2.svg";
// import img3 from "../public/img/contactpage/img3.svg";

import pin from "../public/img/footer/pin.svg";
import gmail from "../public/img/footer/gmail.svg";
import phone from "../public/img/contactpage/contact-vector.svg";

export default function ContactPage() {
  return (
    <>
      <div id="page-wrap">
        <div className="main-contact-page">
          <div className="ellipse-container">
            <Image id="ellipse" src={elipse6} alt="ellipse" />
          </div>
          <div className="ellipse-container-desk">
            <Image id="ellipse-desk" src={elipse7} alt="ellipse desk" />
          </div>

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
                <Image
                  className="image-contact"
                  id="image-contact"
                  src={img1}
                  alt="store-1"
                />
                {/* <div className="image-row2">
                  <Image
                    className="image-contactrow-1"
                    src={img2}
                    alt="store-2"
                  />
                  <Image className="image-contactrow-2" src={img3} alt="3" />
                </div> */}
              </div>
              <div className="footer-content contact-details">
                <span className="footer-details ts-0">
                  <a
                    className="details-black"
                    href="https://goo.gl/maps/rNA2nxyHudL4E9rF7"
                  >
                    <div className="icon">
                      <Image src={pin} alt="Map"></Image>
                    </div>
                    Shop No 4, Sagar Sanidhya Court Road, Alibaug-Akshi Ferry,
                    Alibag, Maharashtra 402201
                  </a>
                </span>
                <span className="footer-details ts-0">
                  <a
                    className="details-black"
                    href="mailto://info@devakrut.com"
                  >
                    <div className="icon">
                      <Image src={gmail} alt="gmail"></Image>
                    </div>
                    www.devakrut.com | info@devakrut.com
                  </a>
                </span>
                <span className="footer-details ts-0">
                  <a className="details-black" href="tel://9579611239">
                    <div className="icon" id="contact-phoneicon">
                      <Image src={phone} alt="phone"></Image>
                    </div>
                    <div className="details-text-black">9579611239</div>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
