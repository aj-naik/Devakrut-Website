import React from "react";
import "./AboutPage.css"; 
import CarouselComponent from "../carousel/Carousel-Component";
export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="main-title">Devakrut</div>
      <div className="text-container" id="text-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        quisque volutpat id molestie id non morbi lorem. Augue sit elit augue
        viverra est. A etiam mi purus arcu felis ultrices praesent tincidunt.
        Eget a pellentesque ut urna proin adipiscing ut.
      </div>
      <img
        className="image-container"
        id="image-1"
        src="img/about/banda1.svg"
      />
      <div className="text-container" id="text-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        quisque volutpat id molestie id non morbi lorem. Augue sit elit augue
        viverra est. A etiam mi purus arcu felis ultrices praesent tincidunt.
        Eget a pellentesque ut urna proin adipiscing ut.
      </div>
      <img className="yellow-circle" id="circle-2" src="img/about/2nd.svg" />
      
      <div className="text-container" id="text-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        quisque volutpat id molestie id non morbi lorem. Augue sit elit augue
        viverra est. A etiam mi purus arcu felis ultrices praesent tincidunt.
        Eget a pellentesque ut urna proin adipiscing ut.
      </div>
      <img
        className="yellow-circle"
        id="circle-1"
        src="img/about/1st.svg"
        alt="circle-1"
      />
      <img
        className="image-container"
        id="image-2"
        src="img/about/banda2.svg"
        alt="circle-1"
      />
      <CarouselComponent />
    </div>
  );
}
