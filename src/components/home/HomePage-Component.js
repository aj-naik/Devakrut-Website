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
        <img
          className="process"
          src="/img/homepage/process.svg"
          alt="process"
        />
      </div>
    </>
  );
}
