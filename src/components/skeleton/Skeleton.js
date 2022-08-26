import React from "react";

const Skeleton = ({ width, height, mb, children }) => {
  return (
    <div
      className="skeleton"
      style={{ width: width || "100%", height: height, marginBottom: mb }}
    >
      {children}
    </div>
  );
};

export default Skeleton;
