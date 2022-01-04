import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Image from "next/image";

import bottleimage from "../public/img/homepage/bottles_desk.svg";
import title_image from "../public/img/homepage/devakrut_title_desk.svg";
import groundnut_image from "../public/img/homepage/groundnut_desk.svg";
import sunflower_image from "../public/img/homepage/sunflower_desk.svg";
import coconut_image from "../public/img/homepage/coconut_desk.svg";
import mustard_flower_image from "../public/img/homepage/mustard_flower_desk.svg";

import thread_mobile from "../public/img/homepage/thread_mobile.svg";
import thread_desk from "../public/img/homepage/thread_desk.svg";
import process_title_home from "../public/img/homepage/process_title_home.svg";
import process_1_image from "../public/img/homepage/process_1_home.svg";
import process_2_image from "../public/img/homepage/process_2_home.svg";
import process_3_image from "../public/img/homepage/process_3_home.svg";
import process_4_image from "../public/img/homepage/process_4_home.svg";

import benefits_title_home from "../public/img/homepage/benefits_title_home.svg";
import benefits_left from "../public/img/homepage/benefits_left.svg";
import benefits_right from "../public/img/homepage/benefits_right.svg";
import benefits_bottles from "../public/img/homepage/benefits_bottles.svg";

export default function HomePage() {
  return (
    <>
      <span className="l-y-cicrle"></span>
      <span className="l-y-box mobile"></span>
      <div className="main-image-section">
        <span className="y-cicrle"></span>
        <div className="bottles-desk-home scale-up-center formatter">
          <Image src={bottleimage} alt="bottle-desk" />
        </div>
        <div className="title-main fade-in formatter">
          <Image src={title_image} alt="title-desk" />
        </div>
        <div className="nuts_home fade-in-left formatter">
          <Image src={groundnut_image} alt="nuts-desk" />
        </div>
        <div className="sunflower_home fade-in-bl formatter">
          <Image src={sunflower_image} alt="suns-desk" />
        </div>
        <div className="coconut_home fade-in-br formatter">
          <Image src={coconut_image} alt="coconut-desk" />
        </div>
        <div className="mustard_flower fade-in-right formatter">
          <Image src={mustard_flower_image} alt="mustard-desk" />
        </div>
      </div>
      <div className="process-section mobile">
        <img
          src="/img/homepage/thread_mobile.svg"
          alt="process"
          className="process-thread mobile formatter"
        />

        <div className="formatter fade-in process_title ">
          <Image src={process_title_home} alt="process title" />
        </div>
      </div>
      <div className="process-section">
        <div className="process-thread desktop formatter">
          <Image src={thread_desk} alt="process" />
          <div className="formatter fade-in process_title ">
            <Image src={process_title_home} alt="process title" />
          </div>
        </div>

        <div className="process_1 fade-in-left formatter">
          <Image src={process_1_image} alt="process1" />
        </div>

        <div className="process_2 fade-in-right formatter">
          <Image src={process_2_image} alt="process2" />
        </div>

        <div className="process_3 fade-in-left formatter">
          <Image src={process_3_image} alt="process3" />
        </div>

        <div className="process_4 fade-in-right formatter">
          <Image src={process_4_image} alt="process4" />
        </div>
      </div>
      <div className="benefits-section">
        <div className="benefits-title-home fade-in-right formatter">
          <Image src={benefits_title_home} alt="benefits title" />
        </div>
        <AnimatedOnScroll
          animationIn="fadeInLeft"
          animationOut=""
          animationInDuration={1200}
        >
          <div className="benefits-left formatter">
            <Image src={benefits_left} alt="benefits_left" />
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          animationIn="fadeIn"
          animationOut=""
          animationInDuration={1200}
        >
          <div className="benefits-bottles formatter">
            <Image src={benefits_bottles} alt="benefits_left" />
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          animationIn="fadeInRight"
          animationOut=""
          animationInDuration={1200}
        >
          <div className="benefits-right formatter">
            <Image src={benefits_right} alt="benefits_right" />
          </div>
        </AnimatedOnScroll>
      </div>
    </>
  );
}
