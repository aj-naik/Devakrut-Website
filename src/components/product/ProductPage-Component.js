import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ProductPage.css";

export default function ProductPage() {
  return (
    // <Carousel
    //   showThumbs={false}
    //   autoPlay
    //   centerMode={true}
    //   centerSlidePercentage={45}
    //   showIndicators={false}
    //   showStatus={false}
    //   infiniteLoop={true}
    // >
      <div className="product-page">
        <div className="product-content">
          <div className="title">Wood Pressed Coconut Oil</div>
          <div className="product-content">
              <p> Lorem ipsum dolor sit amet, sectetur adipiscing elit. Mauris eget quisque volutpat id molestie id non morbi lorem. Augue sit elit augue viverra est. A etiam mi purus arcu felis ultrices praesent tincidunt.t a ellentesque ut urna proin adipiscing ut.</p>
          </div>
          <div className="benefits">
              <div className="benefits-title">Benefits</div>
              <div className="benefits-details">
                  <span className="detail-points">Lorem ipsum dolor sit amet, sectetur adipiscing elit.</span>
                  <span className="detail-points">Mauris eget quisque volutpat id molestie id non morbi lorem.</span>
                  <span className="detail-points">Augue sit elit augue viverra est.</span>
              </div>
          </div>
        </div>
      </div>
    // </Carousel>
  );
}
