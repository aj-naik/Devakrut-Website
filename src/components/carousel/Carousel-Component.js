import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css"

export default function CarouselComponent() {
    return (
        <Carousel showThumbs={false}>
            <div>
                <img src="img/about/banda1.svg" alt="banda1"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
            <img src="img/about/banda2.svg" alt="banda2"/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
            <img src="img/about/banda1.svg" alt="banda1"/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}
