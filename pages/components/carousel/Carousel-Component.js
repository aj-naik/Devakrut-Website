import React from "react";
import { Carousel } from "react-responsive-carousel";
export default function CarouselComponent({ slidePercentage }) {

  return (
    <Carousel
      showThumbs={false}
      centerMode={true}
      autoPlay
      centerSlidePercentage={slidePercentage}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
      interval={7000}
      swipeScrollTolerance={1}
      preventMovementUntilSwipeScrollTolerance={true}
    >
      <div className="wrapper">
        <div className="carousel-card">
          <img
            src="img/about/banda-v-neck.jpg"
            className="carousel-image"
            alt="banda1"
          />
          <div className="carousel-text">
            <p className="legend-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget quisque volutpat id molestie id non morbi lorem. Augue sit{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="carousel-card">
          <img
            src="img/about/banda-v-neck.jpg"
            className="carousel-image"
            alt="banda1"
          />
          <div className="carousel-text">
            <p className="legend-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget quisque volutpat id molestie id non morbi lorem. Augue sit{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="carousel-card">
          <img
            src="img/about/banda-v-neck.jpg"
            className="carousel-image"
            alt="banda1"
          />
          <div className="carousel-text">
            <p className="legend-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget quisque volutpat id molestie id non morbi lorem. Augue sit{" "}
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}