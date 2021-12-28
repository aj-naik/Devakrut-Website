import React from "react";
import "./HomePage.css";
import "./HomePage-Desktop.css";
import "./HomePage-Anim.css";

export default function HomePage() {
  return (
    <>
    <span className="desktop l-y-cicrle"></span>
    
      <div className="main-image-section">
        <img
          className="main-image"
          src="/img/homepage/mainimg.svg"
          alt="mainimg"
        />
        
        <span className="desktop y-cicrle"></span>
        <img
          className="desktop bottles-desk-home scale-up-center"
          src="/img/homepage/bottles_desk.svg"
          alt="bottle-desk"
        />
        <img
          className="desktop title-main fade-in"
          src="/img/homepage/devakrut_title_desk.svg"
          alt="title-desk"
        />
        <img
          className="desktop nuts_home fade-in-left"
          src="/img/homepage/groundnut_desk.svg"
          alt="nuts-desk"
        />
        <img
          className="desktop sunflower_home fade-in-bl"
          src="/img/homepage/sunflower_desk.svg"
          alt="suns-desk"
        />
        <img
          className="desktop coconut_home fade-in-br"
          src="/img/homepage/coconut_desk.svg"
          alt="coconut-desk"
        />
        <img
          className="desktop mustard_flower fade-in-right"
          src="/img/homepage/mustard_flower_desk.svg"
          alt="mustard-desk"
        />
      </div>
      <div className="process-section">
        {/* <span className="process-heading">Process</span>
        <span className="process-subtitle">From Farm to your Doorsteps</span>
        <span className="process-number" id="process-1">
          1
        </span>
        <span className="process-text" id="process-text-1">
          Sourced Direct from the farms.
        </span>
        <span className="process-number" id="process-2">
          2
        </span>
        <span className="process-text" id="process-text-2">
          Cold Pressed Extraction
        </span>
        <span className="process-number" id="process-3">
          3
        </span>
        <span className="process-text" id="process-text-3">
          Filtered Naturally
        </span>
        <span className="process-number" id="process-4">
          4
        </span>
        <span className="process-text" id="process-text-4">
          Chemical and preservative free botling
        </span> */}
        <img
          className="process"
          src="/img/homepage/process.svg"
          alt="process"
        />
      </div>
      <div className="benefits-section">
        <img
          className="benefits"
          src="/img/homepage/benefits.svg"
          alt="process"
        />
      </div>
    </>
  );
}
