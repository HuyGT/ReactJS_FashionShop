import React from "react";
import useClickActive from "../../hooks/useClickActive";

const ChooseColor = ({ onClick, classTag, color, children, size, active }) => {
  useClickActive(`.${classTag}`);

  return (
    <div className="h-3 flex" onClick={onClick}>
      <input type="radio" className="radio" />
      <label
        style={{ backgroundColor: color || "" }}
        className={`radio-label ${classTag} ${size ? "text-[#000]" : ""} ${
          active ? "active" : ""
        }`}
      >
        {children}
      </label>
    </div>
  );
};

export default ChooseColor;
