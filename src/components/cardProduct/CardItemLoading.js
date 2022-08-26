import React from "react";
import Skeleton from "../skeleton/Skeleton";

const CardItemLoading = () => {
  return (
    <div className="card-product">
      <div className="card-wrapp_image">
        <Skeleton height="270px"></Skeleton>
      </div>
      <div className="cart-info">
        <h3 className="product-name">
          <Skeleton height="20px" mb="10px"></Skeleton>
        </h3>
        <span className="product-price">
          <Skeleton height="20px" width="70px"></Skeleton>
        </span>
      </div>
    </div>
  );
};

export default CardItemLoading;
