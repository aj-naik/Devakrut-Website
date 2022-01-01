import React from "react";
import { Carousel } from "react-responsive-carousel";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export default function ProductPage() {

  return (
    <>
      <div id="page-wrap">
        <div className="main-product-page">
          <Carousel
            showThumbs={false}
            autoPlay
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
          >
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationOut=""
              animationInDuration={1800}
            >
              <div className="product-page">
                <div className="product-content">
                  <div className="title">Wood Pressed Coconut Oil</div>
                  <div className="product-img-container">
                    <AnimatedOnScroll
                      animationIn="fadeInRight"
                      animationOut=""
                      animationInDuration={1200}
                    >
                      <img
                        className="product-i"
                        src="img/product/coconut.svg"
                        alt="coconut"
                      ></img>
                    </AnimatedOnScroll>
                  </div>
                  <div className="product-content">
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim. Donec pede justo, fringilla vel, aliquet nec,
                      vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
                      a, venenatis vitae, justo. Nullam dictum felis eu pede
                      mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                      Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                      ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                      feugiat a, tellus. Phasellus viverra nulla ut metus varius
                      laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
                      nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
                      eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                      condimentum rhoncus, sem quam semper libero, sit amet
                      adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                      vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
                      odio et ante tincidunt tempus. Donec vitae sapien ut
                      libero venenatis faucibus. Nullam quis ante. Etiam sit
                      amet orci eget eros faucibus tincidunt. Duis leo. Sed
                      fringilla mauris sit amet nibh. Donec sodales sagittis
                      magna. Sed consequat, leo eget bibendum sodales, augue
                      velit cursus nunc,
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
                          Mauris eget quisque volutpat id molestie id non morbi
                          lorem.
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
                        <img
                          className="p-img"
                          src="/img/product/tree.svg"
                          alt="tree-img"
                        ></img>
                        <span className="image-text">
                          Sourced Direct from farm
                        </span>
                      </div>
                      <div className="process-image">
                        <img
                          className="p-img"
                          src="/img/product/machine.svg"
                          alt="machine-img"
                        ></img>
                        <span className="image-text">
                          Cold Pressed Extraction
                        </span>
                      </div>
                      <div className="process-image">
                        <img
                          className="p-img"
                          src="/img/product/filter.svg"
                          alt="filter-img"
                        ></img>
                        <span className="image-text">Filtered Naturally</span>
                      </div>
                      <div className="process-image">
                        <img
                          className="p-img"
                          src="/img/product/bottle.svg"
                          alt="bottle-img"
                        ></img>
                        <span className="image-text">
                          Chemical and preservative free Bottling
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>

            <div className="product-page">
              <div className="product-content">
                <div className="title">Wood Pressed Groundnut Oil</div>
                <div className="product-img-container">
                  <img
                    className="product-i"
                    src="img/product/groundnut.svg"
                    alt="groundnut"
                    id="groundnut"
                  ></img>
                </div>
                <div className="product-content">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, sectetur adipiscing elit. Mauris
                    eget quisque volutpat id molestie id non morbi lorem. Augue
                    sit elit augue viverra est. A etiam mi purus arcu felis
                    ultrices praesent tincidunt.t a ellentesque ut urna proin
                    adipiscing ut.
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
                        Mauris eget quisque volutpat id molestie id non morbi
                        lorem.
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
                      <img
                        className="p-img"
                        src="/img/product/tree.svg"
                        alt="tree-img"
                      ></img>
                      <span className="image-text">
                        Sourced Direct from farm
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/machine.svg"
                        alt="machine-img"
                      ></img>
                      <span className="image-text">
                        Cold Pressed Extraction
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/filter.svg"
                        alt="filter-img"
                      ></img>
                      <span className="image-text">Filtered Naturally</span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/bottle.svg"
                        alt="bottle-img"
                      ></img>
                      <span className="image-text">
                        Chemical and preservative free Bottling
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-page">
              <div className="product-content">
                <div className="title">Wood Pressed Sunflower Oil</div>
                <div className="product-img-container">
                  <img
                    className="product-i"
                    src="img/product/sunflower.svg"
                    alt="sunflower"
                  ></img>
                </div>
                <div className="product-content">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, sectetur adipiscing elit. Mauris
                    eget quisque volutpat id molestie id non morbi lorem. Augue
                    sit elit augue viverra est. A etiam mi purus arcu felis
                    ultrices praesent tincidunt.t a ellentesque ut urna proin
                    adipiscing ut.
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
                        Mauris eget quisque volutpat id molestie id non morbi
                        lorem.
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
                      <img
                        className="p-img"
                        src="/img/product/tree.svg"
                        alt="tree-img"
                      ></img>
                      <span className="image-text">
                        Sourced Direct from farm
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/machine.svg"
                        alt="machine-img"
                      ></img>
                      <span className="image-text">
                        Cold Pressed Extraction
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/filter.svg"
                        alt="filter-img"
                      ></img>
                      <span className="image-text">Filtered Naturally</span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/bottle.svg"
                        alt="bottle-img"
                      ></img>
                      <span className="image-text">
                        Chemical and preservative free Bottling
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-page">
              <div className="product-content">
                <div className="title">Wood Pressed Mustard Oil</div>
                <div className="product-img-container">
                  <img
                    className="product-i"
                    src="img/product/mustard.svg"
                    alt="mustard"
                    id="mustard"
                  ></img>
                </div>
                <div className="product-content">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, sectetur adipiscing elit. Mauris
                    eget quisque volutpat id molestie id non morbi lorem. Augue
                    sit elit augue viverra est. A etiam mi purus arcu felis
                    ultrices praesent tincidunt.t a ellentesque ut urna proin
                    adipiscing ut.
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
                        Mauris eget quisque volutpat id molestie id non morbi
                        lorem.
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
                      <img
                        className="p-img"
                        src="/img/product/tree.svg"
                        alt="tree-img"
                      ></img>
                      <span className="image-text">
                        Sourced Direct from farm
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/machine.svg"
                        alt="machine-img"
                      ></img>
                      <span className="image-text">
                        Cold Pressed Extraction
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/filter.svg"
                        alt="filter-img"
                      ></img>
                      <span className="image-text">Filtered Naturally</span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/bottle.svg"
                        alt="bottle-img"
                      ></img>
                      <span className="image-text">
                        Chemical and preservative free Bottling
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-page">
              <div className="product-content">
                <div className="title">Wood Pressed Safflower Oil</div>
                <div className="product-img-container">
                  <img
                    className="product-i"
                    src="img/product/safflower.svg"
                    alt="safflower"
                  ></img>
                </div>
                <div className="product-content">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, sectetur adipiscing elit. Mauris
                    eget quisque volutpat id molestie id non morbi lorem. Augue
                    sit elit augue viverra est. A etiam mi purus arcu felis
                    ultrices praesent tincidunt.t a ellentesque ut urna proin
                    adipiscing ut.
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
                        Mauris eget quisque volutpat id molestie id non morbi
                        lorem.
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
                      <img
                        className="p-img"
                        src="/img/product/tree.svg"
                        alt="tree-img"
                      ></img>
                      <span className="image-text">
                        Sourced Direct from farm
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/machine.svg"
                        alt="machine-img"
                      ></img>
                      <span className="image-text">
                        Cold Pressed Extraction
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/filter.svg"
                        alt="filter-img"
                      ></img>
                      <span className="image-text">Filtered Naturally</span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/bottle.svg"
                        alt="bottle-img"
                      ></img>
                      <span className="image-text">
                        Chemical and preservative free Bottling
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-page">
              <div className="product-content">
                <div className="title">Wood Pressed Sesame Oil</div>
                <div className="product-img-container">
                  <img
                    id="sesame-img"
                    src="img/product/sesame.png"
                    alt="sesame"
                    className="product-i"
                  ></img>
                </div>
                <div className="product-content">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, sectetur adipiscing elit. Mauris
                    eget quisque volutpat id molestie id non morbi lorem. Augue
                    sit elit augue viverra est. A etiam mi purus arcu felis
                    ultrices praesent tincidunt.t a ellentesque ut urna proin
                    adipiscing ut.
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
                        Mauris eget quisque volutpat id molestie id non morbi
                        lorem.
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
                      <img
                        className="p-img"
                        src="/img/product/tree.svg"
                        alt="tree-img"
                      ></img>
                      <span className="image-text">
                        Sourced Direct from farm
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/machine.svg"
                        alt="machine-img"
                      ></img>
                      <span className="image-text">
                        Cold Pressed Extraction
                      </span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/filter.svg"
                        alt="filter-img"
                      ></img>
                      <span className="image-text">Filtered Naturally</span>
                    </div>
                    <div className="process-image">
                      <img
                        className="p-img"
                        src="/img/product/bottle.svg"
                        alt="bottle-img"
                      ></img>
                      <span className="image-text">
                        Chemical and preservative free Bottling
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
