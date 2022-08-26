import React from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import useTotop from "../../hooks/useTotop";

const CardItem = ({ card }) => {
  const history = useHistory();
  const handleScrollToTop = useTotop();

  const handleToDetail = (id) => {
    history.push(
      generatePath(ROUTER_PATH.DETAIL.path, {
        id: id,
      })
    );
    handleScrollToTop();
  };

  return (
    <div className="card-product" onClick={() => handleToDetail(card.id)}>
      <div className="card-wrapp_image">
        <img
          className="cart-img w-full h-full object-cover"
          src={card.image}
          alt=""
        />
      </div>
      <div className="cart-info">
        <h3 className="product-name text-line-2 mb-3">{card.productName}</h3>
        <span className="product-price">{card.price}$</span>
      </div>
    </div>
  );
};

export default CardItem;
