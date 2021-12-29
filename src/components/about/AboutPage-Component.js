import React from "react";
import "./AboutPage.css";
import "./AboutPage-Desktop.css";
import CarouselComponent from "../carousel/Carousel-Component";
import { useMediaQuery } from "react-responsive";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
export default function AboutPage() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    
    <div className="about-page">
      <AnimatedOnScroll
          animationIn="fadeIn"
          animationOut=""
          animationInDuration={1800}
        >
      <div className="main-title">Devakrut</div>
      </AnimatedOnScroll>
      <img
        className="yellow-circle"
        id="circle-1"
        src="img/about/1st.svg"
        alt="circle-1"
      />
      <img
        className="yellow-circle"
        id="circle-1-desk"
        src="img/about/circle1-desk.svg"
        alt="circle-1"
      />
      <AnimatedOnScroll
          animationIn="fadeIn"
          animationOut=""
          animationInDuration={1800}
        >

      <div className="text-container" id="text-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        quisque volutpat id molestie id non morbi lorem. Augue sit elit augue
        viverra est. A etiam mi purus arcu felis ultrices praesent tincidunt.
        Eget a pellentesque ut urna proin adipiscing ut.
      </div>

      <div className="box" id="box1">
        <img
          className="image-container"
          id="image-1"
          src="img/about/banda1.svg"
          alt="main-img-1"
        />

        <div className="text-container" id="text-2">
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
      <img
        className="yellow-circle"
        id="circle-2-desk"
        src="img/about/circle2-desk.svg"
        alt="circle2"
      />

      <div className="box" id="box2">
        <img
          className="image-container"
          id="image-2"
          src="img/about/banda2.svg"
          alt="main-img-2"
        />

        <div className="text-container" id="text-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
          quisque volutpat id molestie id non morbi lorem. Augue sit elit augue
          viverra est. A etiam mi purus arcu felis ultrices praesent tincidunt.
          Eget a pellentesque ut urna proin adipiscing ut.
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonial-text">Testimonials</div>
        {isDesktopOrLaptop && <CarouselComponent slidePercentage={30} />}
        {!isDesktopOrLaptop && <CarouselComponent slidePercentage={45} />}
      </div>

      <div className="certification">
        <div className="certification-text">Certified By</div>

        <div className="certification-img">
          <img src="img/about/certified-1.svg" alt="img1" id="img-1" className="img-cert"></img>
          <img src="img/about/certified-2.svg" alt="img2" id="img-2" className="img-cert"></img>
          <img src="img/about/certified-3.svg" alt="img3" id="img-3" className="img-cert"></img>
          <img src="img/about/certified-4.svg" alt="img4" id="img-4" className="img-cert"></img>
        </div>
      </div>
      </AnimatedOnScroll>
    </div>
    
  );
}
