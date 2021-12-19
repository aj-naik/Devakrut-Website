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
          <p>
            {" "}
            Lorem ipsum dolor sit amet, sectetur adipiscing elit. Mauris eget
            quisque volutpat id molestie id non morbi lorem. Augue sit elit
            augue viverra est. A etiam mi purus arcu felis ultrices praesent
            tincidunt.t a ellentesque ut urna proin adipiscing ut.
          </p>
        </div>
        <div className="benefits">
          <div className="benefits-title">Benefits</div>
          <div className="benefits-details">
            <ul>
              <li className="detail-points">
                Lorem ipsum dolor sit amet, sectetur adipiscing elit.
              </li>
              <li className="detail-points">
                Mauris eget quisque volutpat id molestie id non morbi lorem.
              </li>
              <li className="detail-points">
                Augue sit elit augue viverra est
              </li>
            </ul>
          </div>
        </div>
        <div className="process">
          <div className="process-title">Process</div>
          <div className="process-details">
            <div className="process-image">
              <img className="p-img" src="/img/product/tree.svg" alt="tree-img"></img>
              <span className="image-text">Sourced Direct from farm</span>
            </div>
            <div className="process-image">
              <img className="p-img" src="/img/product/machine.svg" alt="machine-img"></img>
              <span className="image-text">Cold Pressed Extraction</span>
            </div>
            <div className="process-image">
              <img className="p-img" src="/img/product/filter.svg" alt="filter-img"></img>
              <span className="image-text">Filtered Naturally</span>
            </div>
            <div className="process-image">
              <img className="p-img" src="/img/product/bottle.svg" alt="bottle-img"></img>
              <span className="image-text">Chemical and preservative free Bottling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Carousel>
  );
}
