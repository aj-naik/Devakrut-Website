import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
    
    <div className="main-contact-page">
    <img
          className="ellipse-container"
          id="ellipse"
          src="img/contactpage/ellipse6.svg"
          alt="ellipse"
        />
      
      <div className="contact-box">
        <div className="box-title">Leave Us a Message</div>
        <div className="box-subtitle">
          Attending your queries is our pleasure!
        </div>
        <div className="form">
            <div className="form-component">
                <label htmlFor="Name" className="label-name">Name</label>
                <input type = "text" className="data"></input>
            </div>
            <div className="form-component">
                <label htmlFor="E-mail" className="label-name">E-mail</label>
                <input type = "text" className="data"></input>
            </div>
            <div className="form-component">
                <label htmlFor="Phone Number" className="label-name">Phone Number</label>
                <input type = "text" className="data"></input>
            </div>
            <div className="form-component">
                <label htmlFor="Message" className="label-name" id="text-area">Message</label>
                <textarea type = "text" className="data-2"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </div>
      </div>
    </div>
    </>
  );
}
