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
      infiniteLoop={false}
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
            Raw   material  {" "}
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
            Seed Crushing  {" "}
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
            Oil extraction{" "}
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
            Oil sedimentation{" "}
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
            Bottling & packaging {" "}
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
