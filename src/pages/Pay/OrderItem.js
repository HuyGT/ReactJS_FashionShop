import React from "react";

const OrderItem = ({ product }) => {
  return (
    <div className="order-item mb-5">
      <div className="h-[200px] w-[200px] mx-auto mb-5">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={product.image}
          alt=""
        />
      </div>
      <h2 className="text-line-2 title-name">{product.productName}</h2>
      <p className="flex gap-10 my-3">
        <span>
          SIZE:
          <span className="font-semibold ml-5">
            {product.valueSize.toUpperCase()}
          </span>
        </span>
        <span>
          COLOR:{" "}
          <span className="font-semibold ml-5">{product.valueColor}</span>
        </span>
      </p>
      <p>
        <span className="title-price">{product.price} $</span>
      </p>
    </div>
  );
};

export default OrderItem;
