import React, { memo } from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import CardItemLoading from "./CardItemLoading";
import "./style.scss";

const CardProduct = ({ cardProduct }) => {
  const { isLoading } = useSelector((state) => state.productReducer);

  return (
    <div className="card-product-wrapper">
      {!isLoading &&
        cardProduct?.length > 0 &&
        cardProduct?.map((card) => (
          <CardItem key={card.id} card={card}></CardItem>
        ))}
      {!isLoading && cardProduct?.length <= 0 && (
        <div className=" mx-auto w-[50%] wrapp-img-no-data">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://store.vtctelecom.com.vn/Content/images/no-data.png"
            alt=""
          />
        </div>
      )}
      {isLoading &&
        Array(8)
          .fill(null)
          .map((item, index) => (
            <CardItemLoading key={index}></CardItemLoading>
          ))}
    </div>
  );
};

export default memo(CardProduct);
