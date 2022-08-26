import React from "react";

const ImageSlider = ({ imageSlider }) => {
  return (
    <div className="h-[500px] flex pr-4">
      <img className="slider-image" src={imageSlider} alt="" />
    </div>
  );
};

export default ImageSlider;
