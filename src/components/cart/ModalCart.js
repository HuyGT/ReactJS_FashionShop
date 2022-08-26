import React, { memo, useMemo } from "react";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import useCalculateTotal from "../../hooks/useCalculateTotal";
import ModalLayout from "../modalLayout/ModalLayout";
import CartItem from "./CartItem";

// import { cartDetailItem } from "./MookData";

const ModalCart = ({ listCart }) => {
  const { profile } = useSelector((state) => state.authReducer);
  const priceTotal = useCalculateTotal(listCart);

  const history = useHistory();

  const cartTotal = useMemo(
    () =>
      listCart.reduce((total, cartTotal) => (total += cartTotal.quantity), 0),
    [listCart]
  );

  const handleCheckOut = () => {
    if (Object.keys(profile) <= 0) {
      history.push(ROUTER_PATH.LOGIN.path);
    } else {
      history.push(ROUTER_PATH.PAY.path);
    }
  };

  return (
    <>
      <ModalLayout>
        <div className="cart">
          <h2 className="text-[2.5rem] uppercase p-6 shadow-sm flex items-center gap-6">
            <FaOpencart className=""></FaOpencart>
            Cart
          </h2>
          <div className="listCart max-h-[70vh] overflow-y-auto ">
            {listCart?.map((cartDetail) => (
              <CartItem key={cartDetail.id} cartDetail={cartDetail}></CartItem>
            ))}
          </div>
          <div className="pay-cart">
            <div className="cart-total">
              <span>Cart Total: {cartTotal}</span>
              <span> {priceTotal}$</span>
            </div>
            <button className="btn-pay relative" onClick={handleCheckOut}>
              Check out
            </button>
          </div>
        </div>
      </ModalLayout>
    </>
  );
};

export default memo(ModalCart);
