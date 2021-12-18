import React from "react";
import "./AboutPage.css";
import CarouselComponent from "../carousel/Carousel-Component";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="main-title">Devakrut</div>

      <div className="text-container-1" id="text-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        quisque volutpat id molestie id non morbi lorem. Augue sit elit augue
        viverra est. A etiam mi purus arcu felis ultrices praesent tincidunt.
        Eget a pellentesque ut urna proin adipiscing ut.
      </div>

      <div className="box">
        <img
          className="image-container"
          id="image-1"
          src="img/about/banda1.svg"
          alt="main-img-1"
        />

        <div className="text-container-2" id="text-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
          quisque volutpat id molestie id non morbi lorem. Augue sit elit augue
          viverra est. A etiam mi purus arcu felis ultrices praesent tincidunt.
          Eget a pellentesque ut urna proin adipiscing ut.
        </div>
      </div>

      <img
        className="yellow-circle"
        id="circle-2"
        src="img/about/2nd.svg"
        alt="circle2"
      />

      <div className="box">
        <img
          className="image-container"
          id="image-2"
          src="img/about/banda2.svg"
          alt="circle-1"
        />

        <div className="text-container-3" id="text-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
          quisque volutpat id molestie id non morbi lorem. Augue sit elit augue
          viverra est. A etiam mi purus arcu felis ultrices praesent tincidunt.
          Eget a pellentesque ut urna proin adipiscing ut.
        </div>
      </div>

      <img
        className="yellow-circle"
        id="circle-1"
        src="img/about/1st.svg"
        alt="circle-1"
      />

      <div className="testimonial">
        <div className="testimonial-text">Testimonials</div>
        <CarouselComponent />
      </div>

      <div className="certification">
        <div className="certification-text">Certified By</div>

        <div className="certification-img">
          <img src="img/about/certified-1.svg" alt="img1" id="img-1"></img>
          <img src="img/about/certified-2.svg" alt="img2" id="img-2"></img>
          <img src="img/about/certified-3.svg" alt="img3" id="img-3"></img>
          <img src="img/about/certified-4.svg" alt="img4" id="img-4"></img>
        </div>
      </div>
    </div>
  );
}
