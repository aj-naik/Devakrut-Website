import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="main-image-section">
        <img
          className="main-image"
          src="/img/homepage/mainimg.svg"
          alt="mainimg"
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
