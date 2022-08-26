import React from "react";

const ItemMethod = ({ datatype, children, name, handleClick }) => {
  return (
    <div
      className="flex gap-4 items-center deliv-method checkout-method cursor-pointer"
      data-name={datatype}
      onClick={handleClick}
    >
      {children}
      <span className="pointer-events-none">{name}</span>
    </div>
  );
};

export default ItemMethod;
