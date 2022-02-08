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
            // autoPlay
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
                <div className="product-img-container-d">
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
                      It is considered to be one of the best edible oil in
                      India. Coconut oil derived from the wick, meat, and milk
                      of the coconut palm fruit. It improves cognition and makes
                      you feels fuller for longer time. It is famous for going
                      on for months and even year without turning foul.
                    </p>
                  </div>

                  <div className="benefits">
                    <div className="benefits-title">Benefits</div>
                    <div className="benefits-details">
                      <ul>
                        <li className="detail-points">
                          Antibacterial, antifungal, and antiviral properties.
                        </li>
                        <li className="detail-points">
                          Rich in Vitamin K and E, minerals like zinc, calcium
                          and iron
                        </li>
                        <li className="detail-points">Increases immunity</li>
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
              <div className="product-img-container-d">
                <img
                  className="product-i"
                  src="img/product/groundnut.svg"
                  alt="groundnut"
                  id="groundnut"
                ></img>
              </div>
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
                    Another perfect choice for Asian food. It contains
                    monosaturated and polysaturated fat which helps in
                    maintaining Low density lipoproteins (cholesterol). Contains
                    Omega -6 a essential fatty acid making it as one of the
                    healthiest cooking oil.
                  </p>
                </div>

                <div className="benefits">
                  <div className="benefits-title">Benefits</div>
                  <div className="benefits-details">
                    <ul>
                      <li className="detail-points">
                        Reduces chances of accumulating fat in arteries
                      </li>
                      <li className="detail-points">Lowers BP</li>
                      <li className="detail-points"> Improves blood flow</li>
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
              <div className="product-img-container-d">
                <img
                  className="product-i"
                  src="img/product/sunflower.svg"
                  alt="sunflower"
                ></img>
              </div>
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
                    Craving some chips and samosas? Still want it to be healthy
                    and tasy? Then you should definitely try our Sunflower oil
                    due it&apos;s capacity to hold on to it&apos;s nutritional
                    value even at high flame definitely would make your homemade
                    food more tasty! It is pressed from the seeds of sunflower.
                    The expressed oil has a neutral taste profile.
                  </p>
                </div>

                <div className="benefits">
                  <div className="benefits-title">Benefits</div>
                  <div className="benefits-details">
                    <ul>
                      <li className="detail-points">
                        Best for frying, sautéing, stir frying
                      </li>
                      <li className="detail-points">Hydrates the skin</li>
                      <li className="detail-points">
                        Large amount of vitamin E.
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
              <div className="product-img-container-d">
                <img
                  className="product-i"
                  src="img/product/mustard.svg"
                  alt="mustard"
                  id="mustard"
                ></img>
              </div>
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
                    Number one choice in Indian households, when it comes to
                    traditional cooking. The essential oil results from grinding
                    mustard seed, or can also be produced by dry distillation of
                    the seed. Due to its simulation and high digestive
                    properties it is beneficial for use.
                  </p>
                </div>

                <div className="benefits">
                  <div className="benefits-title">Benefits</div>
                  <div className="benefits-details">
                    <ul>
                      <li className="detail-points">
                        Acts as a natural cleanser by opening skin pores by
                        stimulating the sweat glands.
                      </li>
                      <li className="detail-points">
                        Massaging with mustard oil is known to lighten the
                        pigmentation spots and improve complexion.
                      </li>
                      <li className="detail-points">
                        Considered as a natural sunscreen when applied
                        externally.
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
              <div className="product-img-container-d">
                <img
                  className="product-i"
                  src="img/product/safflower.svg"
                  alt="safflower"
                ></img>
              </div>
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
                    The linolenic and linolenic avid in Safflower seed oil helps
                    prevent hardening of the arteries. Lowers cholesterol and
                    risk of heart disease, stroke, diabetes, widens blood
                    vessels.
                  </p>
                </div>

                <div className="benefits">
                  <div className="benefits-title">Benefits</div>
                  <div className="benefits-details">
                    <ul>
                      <li className="detail-points">Maintains BP</li>
                      <li className="detail-points">Stimulates heart</li>
                      <li className="detail-points">
                        Contains Vitamin A, D, E and K
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
              <div className="product-img-container-d">
                <img
                  className="product-i"
                  src="img/product/sesame.svg"
                  alt="sesame"
                ></img>
              </div>
              <div className="product-content">
                <div className="title">Wood Pressed Sesame Oil</div>
                <div className="product-img-container">
                  <img
                    className="product-i"
                    src="img/product/sesame.svg"
                    alt="sesame"
                  ></img>
                </div>

                <div className="product-content">
                  <p>
                    {" "}
                    Want to add more flavor and taste to your dish? Then sesame
                    oil is the best choice for you! It&apos;s mild flavor, nutty
                    aroma and high smoking point works well for Asian foods.
                  </p>
                </div>

                <div className="benefits">
                  <div className="benefits-title">Benefits</div>
                  <div className="benefits-details">
                    <ul>
                      <li className="detail-points">Helps control arthritis</li>
                      <li className="detail-points">
                        Natural Anti inflammatory
                      </li>
                      <li className="detail-points">
                        Rich in minerals like magnesium, calcium, copper, iron
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
