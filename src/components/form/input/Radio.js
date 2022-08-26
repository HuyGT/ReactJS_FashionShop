import React from "react";

import "./style.scss";

const Radio = ({ color, checked, ...props }) => {
  return (
    <div className="h-3 flex ">
      <input
        type="radio"
        {...props}
        className="radio-input"
        checked={checked}
      />
      <label
        style={{ backgroundColor: color || "" }}
        htmlFor={props.id}
        className="radio-label"
      ></label>
    </div>
  );
};

export default Radio;
