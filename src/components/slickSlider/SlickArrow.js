import React from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const SlickArrowLeft = ({
  currentSlide,
  slideCount,
  clWhite,
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        "btn-slider_nav btn-left" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      style={
        clWhite && {
          fontSize: "1.6rem",
          backgroundColor: "#fff",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 10px",
        }
      }
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <BsArrowLeft className="icon"></BsArrowLeft>
    </button>
  );
};

export const SlickArrowRight = ({
  currentSlide,
  slideCount,
  clWhite,
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        "btn-slider_nav btn-right" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      style={
        clWhite && {
          fontSize: "1.6rem",
          backgroundColor: "#fff",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 10px",
        }
      }
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <BsArrowRight className="icon"></BsArrowRight>
    </button>
  );
};
