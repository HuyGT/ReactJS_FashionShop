import React from "react";
import "./style.scss";

const HighlightSlogan = ({ title, children }) => {
  return (
    <div className="highlight-wrapp ">
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};

export default HighlightSlogan;
