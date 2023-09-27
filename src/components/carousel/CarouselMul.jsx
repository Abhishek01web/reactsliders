import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img from "../../assets/space.jpg";

import { BiArrowBack } from "react-icons/bi";
import "./style.css";

const CarouselMul = () => {
  return (
    <Carousel
      className="carousel"
      autoPlay={true}
      autoPlaySpeed={1000}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
      // renderArrowPrev={(clickHandler) => (
      //   <div onClick={clickHandler} className="btn pre">
      //     <BiArrowBack />
      //   </div>
      // )}
      // renderArrowNext={(clickHandler) => (
      //   <div onClick={clickHandler} className="btn nxt">
      //     <BiArrowBack />
      //   </div>
      // )}
    >
      <div>
        <img src={img} />
      </div>
      <div>
        <img src={img} />
      </div>
      <div>
        <img src={img} />
      </div>
    </Carousel>
  );
};

export default CarouselMul;
