import React from "react";
import Slider from "react-slick";
import { SlickArrowLeft, SlickArrowRight } from "./SlickArrow";

import "./style.scss";

const SlickSlider = ({ children, style, clWhite, slidesToShow = 1 }) => {
  const settings = {
    infinite: true,
    speed: 700,
    draggable: false,
    slidesToShow: slidesToShow,
    prevArrow: <SlickArrowLeft clWhite={clWhite} />,
    nextArrow: <SlickArrowRight clWhite={clWhite} />,
  };

  return (
    <Slider {...settings} style={{ style }}>
      {children}
    </Slider>
  );
};

export default SlickSlider;
