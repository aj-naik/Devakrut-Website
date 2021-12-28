import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./HomePage.css";
import "./HomePage-Desktop.css";
import "./HomePage-Anim.css";

export default function HomePage() {
  return (
    <>
      <span className="desktop l-y-cicrle"></span>

      <div className="main-image-section">
        <img
          className="main-image"
          src="/img/homepage/mainimg.svg"
          alt="mainimg"
        />

        <span className="desktop y-cicrle"></span>
        <img
          className="desktop bottles-desk-home scale-up-center"
          src="/img/homepage/bottles_desk.svg"
          alt="bottle-desk"
        />
        <img
          className="desktop title-main fade-in"
          src="/img/homepage/devakrut_title_desk.svg"
          alt="title-desk"
        />
        <img
          className="desktop nuts_home fade-in-left"
          src="/img/homepage/groundnut_desk.svg"
          alt="nuts-desk"
        />
        <img
          className="desktop sunflower_home fade-in-bl"
          src="/img/homepage/sunflower_desk.svg"
          alt="suns-desk"
        />
        <img
          className="desktop coconut_home fade-in-br"
          src="/img/homepage/coconut_desk.svg"
          alt="coconut-desk"
        />
        <img
          className="desktop mustard_flower fade-in-right"
          src="/img/homepage/mustard_flower_desk.svg"
          alt="mustard-desk"
        />
      </div>
      <div className="process-section mobile">
        <img
          className="process"
          src="/img/homepage/process.svg"
          alt="process"
        />
      </div>
      <div className="process-section desktop">
        <img
          className="process-thread"
          src="/img/homepage/thread_desk.svg"
          alt="process"
        />
        <AnimatedOnScroll animationIn="fadeIn" animationOut="" animationInDuration="1200">
          <img
            className="process_title"
            src="/img/homepage/process_title_home.svg"
            alt="process title"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration="1200">
          <img
            className="process_1"
            src="/img/homepage/process_1_home.svg"
            alt="process1"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInRight" animationOut="" animationInDuration="1200">
          <img
            className="process_2"
            src="/img/homepage/process_2_home.svg"
            alt="process2"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration="1200">
          <img
            className="process_3"
            src="/img/homepage/process_3_home.svg"
            alt="process3"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInRight" animationOut="" animationInDuration="1200">
          <img
            className="process_4"
            src="/img/homepage/process_4_home.svg"
            alt="process4"
          />
        </AnimatedOnScroll>
      </div>
      <div className="benefits-section">
        <img
          className="benefits mobile"
          src="/img/homepage/benefits.svg"
          alt="process"
        />
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration="1200">
          <img
            className="benefits-left desktop"
            src="/img/homepage/benefits_left.svg"
            alt="benefits_left"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeIn" animationOut="" animationInDuration="1200">
          <img
            className="benefits-bottles desktop"
            src="/img/homepage/benefits_bottles.svg"
            alt="benefits_left"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInRight" animationOut="" animationInDuration="1200">
          <img
            className="benefits-right desktop"
            src="/img/homepage/benefits_right.svg"
            alt="benefits_right"
          />
        </AnimatedOnScroll>

      </div>
    </>
  );
}
