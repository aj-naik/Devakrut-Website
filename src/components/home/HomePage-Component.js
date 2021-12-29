import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./HomePage.css";
import "./HomePage-Desktop.css";
import "./HomePage-Anim.css";

export default function HomePage() {
  return (
    <>
      <span className="l-y-cicrle"></span>
      <span className="l-y-box mobile"></span>
      <div className="main-image-section">
        <span className="y-cicrle"></span>
        <img
          className="bottles-desk-home scale-up-center formatter"
          src="/img/homepage/bottles_desk.svg"
          alt="bottle-desk"
        />
        <img
          className="title-main fade-in formatter"
          src="/img/homepage/devakrut_title_desk.svg"
          alt="title-desk"
        />
        <img
          className="nuts_home fade-in-left formatter"
          src="/img/homepage/groundnut_desk.svg"
          alt="nuts-desk"
        />
        <img
          className="sunflower_home fade-in-bl formatter"
          src="/img/homepage/sunflower_desk.svg"
          alt="suns-desk"
        />
        <img
          className="coconut_home fade-in-br formatter"
          src="/img/homepage/coconut_desk.svg"
          alt="coconut-desk"
        />
        <img
          className="mustard_flower fade-in-right formatter"
          src="/img/homepage/mustard_flower_desk.svg"
          alt="mustard-desk"
        />
      </div>
      <div className="process-section mobile">
        <img
          className="process-thread mobile formatter"
          src="/img/homepage/thread_mobile.svg"
          alt="process"
        />
      </div>
      <div className="process-section">
        <img
          className="process-thread desktop formatter"
          src="/img/homepage/thread_desk.svg"
          alt="process"
        />
        <AnimatedOnScroll animationIn="fadeIn" animationOut="" animationInDuration={1200}>
          <img
            className="process_title formatter"
            src="/img/homepage/process_title_home.svg"
            alt="process title"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration={1200}>
          <img
            className="process_1 formatter"
            src="/img/homepage/process_1_home.svg"
            alt="process1"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInRight" animationOut="" animationInDuration={1200}>
          <img
            className="process_2 formatter"
            src="/img/homepage/process_2_home.svg"
            alt="process2"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration={1200}>
          <img
            className="process_3 formatter"
            src="/img/homepage/process_3_home.svg"
            alt="process3"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInRight" animationOut="" animationInDuration={1200}>
          <img
            className="process_4 formatter"
            src="/img/homepage/process_4_home.svg"
            alt="process4"
          />
        </AnimatedOnScroll>
      </div>
      <div className="benefits-section">
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration={1200}>
          <img
            className="benefits-title-home formatter"
            src="/img/homepage/benefits_title_home.svg"
            alt="benefits title"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration={1200}>
          <img
            className="benefits-left formatter"
            src="/img/homepage/benefits_left.svg"
            alt="benefits_left"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeIn" animationOut="" animationInDuration={1200}>
          <img
            className="benefits-bottles scale-up-center-2 formatter"
            src="/img/homepage/benefits_bottles.svg"
            alt="benefits_left"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInRight" animationOut="" animationInDuration={1200}>
          <img
            className="benefits-right formatter"
            src="/img/homepage/benefits_right.svg"
            alt="benefits_right"
          />
        </AnimatedOnScroll>

      </div>
    </>
  );
}
