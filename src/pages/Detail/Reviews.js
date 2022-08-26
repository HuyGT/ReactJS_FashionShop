import { Rate } from "antd";
import React from "react";

const Reviews = ({ buyer }) => {
  return (
    <div className="reviews-item  border-t barder-[#ccc]">
      <div className="w-full">
        <p className="flex items-center justify-between">
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: 500,
              marginBottom: "10px",
            }}
          >
            {buyer?.fullName || "Name name name"}
          </span>
          <span style={{ fontSize: "1.3rem" }}>
            {buyer?.dateAdd || "date date date"}
          </span>
        </p>
        <div className="flex items-center my-3">
          <Rate disabled defaultValue={buyer.rate} />
        </div>
        <p className="pr-[40%]">{buyer?.comment} </p>
      </div>
    </div>
  );
};

export default Reviews;
