import React from "react";
import { useDispatch } from "react-redux";
import {
  actChangeQuantityCart,
  actRemoveToCart,
} from "../../redux/actions/cart/cartAction";

const CartItem = ({ cartDetail }) => {
  const dispatch = useDispatch();

  // console.log(cartDetail);
  const handleIncrease = (id) => {
    if (cartDetail.quantity >= 10) return;
    cartDetail.quantity++;
    dispatch(actChangeQuantityCart({ id: id, quantity: cartDetail.quantity }));
  };

  const handleDecrease = (id) => {
    cartDetail.quantity--;
    dispatch(actChangeQuantityCart({ id: id, quantity: cartDetail.quantity }));

    if (cartDetail.quantity <= 0) {
      dispatch(actRemoveToCart(id));
      return;
    }
  };
  return (
    <div className="cart-item flex gap-2 items-center justify-between p-[2px] mx-2">
      <div className="img-wrapp w-[80px] h-[80px] flex-2">
        <img
          className="w-full h-full object-cover"
          src={cartDetail.image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h3 className="cart-item_title text-line-2 font-medium">
          {cartDetail.productName}
        </h3>
        <span>{cartDetail.price}$</span>
      </div>
      <div className="flex-2">
        <div className="flex justify-end items-center gap-2">
          <span
            className="amount select-none"
            onClick={() => handleDecrease(cartDetail.id)}
          >
            -
          </span>
          <span className="amount amount-quantity select-none">
            {cartDetail?.quantity}
          </span>
          <span
            className="amount select-none"
            onClick={() => handleIncrease(cartDetail.id)}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
