import React from "react";
import CarouselComponent from "./components/carousel/Carousel-Component";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export default function AboutPage() {
  return (
    <>
      <div id="page-wrap">
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
            In this world of chemical toxicity with respect to a lot of products consumed by the citizens, where public health is side-eyed. 
            It is through this realization that we wanted to bring health and wellness back on everyone&apos;s kitchen table. 
            One of the most important products used by the public is &apos;oil&apos;, basic ingredient that every household requires! 
             This thought and efforts to bring the change is exactly how &apos;Devakrut Natural Oils&apos; was created. 


            </div>

            <div className="box" id="box1">
              <img
                className="image-container"
                id="image-1"
                src="img/about/banda1.svg"
                alt="main-img-1"
              />

              <div className="text-container" id="text-2">
              Our vision is to provide with unique and overarching products to change the lives and 
              to do our bit of providing a healthy future to the members of our society. 
               We at Devakrut are committed to provide our customers with only best quality oil. 
               We focus on producing 100% natural using best quality grains during the extraction procedure. 
               Our products are cold pressed, meaning the process uses absolutely no heat which helps retain its virginity, 
               the natural aroma, essential vital nutrients, and its composition. 
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
              We are committed to hygiene and purity. Our bottles are anti-spilling preventing from any leakage during transport, the bottle design allows for both easy handling and storage. 
Whatever your cooking style and your taste preference we have tasty and nutritious oil varieties including coconut oil, groundnut oil, sesame oil, safflower oil, sunflower oil, and mustard oil to meet your cooking needs and support your lifestyle. 
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-text">Process</div>
              <div className="desktop">
                <CarouselComponent slidePercentage={30} />
              </div>
              <div className="mobile">
                <CarouselComponent slidePercentage={30} />
              </div>
            </div>

            <div className="certification">
              <div className="certification-text">Certified By</div>

              <div className="certification-img">
                <img
                  src="img/about/certified-1.svg"
                  alt="img1"
                  id="img-1"
                  className="img-cert"
                ></img>
                <img
                  src="img/about/certified-2.svg"
                  alt="img2"
                  id="img-2"
                  className="img-cert"
                ></img>
                <img
                  src="img/about/certified-3.svg"
                  alt="img3"
                  id="img-3"
                  className="img-cert"
                ></img>
                <img
                  src="img/about/certified-4.svg"
                  alt="img4"
                  id="img-4"
                  className="img-cert"
                ></img>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </>
  );
}
