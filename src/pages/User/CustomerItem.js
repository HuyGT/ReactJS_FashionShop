import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";

const CustomerItem = ({ title, desc, children }) => {
  return (
    <>
      {children}
      <div>
        <h3 className="customer_title">{title}</h3>
        <p className="customer_desc">{desc}</p>
      </div>
      <MdOutlineChevronRight className="customer_icon text-line-2"></MdOutlineChevronRight>
    </>
  );
};

export default CustomerItem;
