import React, { memo } from "react";
import "./style.scss";

const Sliders = ({ children, bgImg }) => {
  return <div className={`slider_home ${bgImg}`}>{children}</div>;
};

export default memo(Sliders);
