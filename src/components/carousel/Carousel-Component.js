import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

export default function CarouselComponent() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      centerMode={true}
      centerSlidePercentage={45}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
    >
      <div className="carousel-card">
        <img
          src="img/about/banda-v-neck.jpg"
          className="carousel-image"
          alt="banda1"
        />
        <div className="carousel-text">
          <p className="legend-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            quisque volutpat id molestie id non morbi lorem. Augue sit{" "}
          </p>
        </div>
      </div>
      <div className="carousel-card">
        <img
          src="img/about/banda-v-neck.jpg"
          className="carousel-image"
          alt="banda1"
        />
        <div className="carousel-text">
          <p className="legend-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            quisque volutpat id molestie id non morbi lorem. Augue sit{" "}
          </p>
        </div>
      </div>
      <div className="carousel-card">
        <img
          src="img/about/banda-v-neck.jpg"
          className="carousel-image"
          alt="banda1"
        />
        <div className="carousel-text">
          <p className="legend-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            quisque volutpat id molestie id non morbi lorem. Augue sit{" "}
          </p>
        </div>
      </div>
    </Carousel>
  );
}
