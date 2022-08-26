import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { actAddOrder, actGetAllOrder } from "../../redux/actions/orderAction";

import useBackPage from "../../hooks/useBackPage";
import { useHistory } from "react-router-dom";

import Form from "../../components/form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { VALIDATE_YUP } from "../../common/validateYup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Info from "./Info";
import "./style.scss";
import Delivery from "./Delivery";
import Payment from "./Payment";
import OrderItem from "./OrderItem";
import { actChangeProfile } from "../../redux/actions/auth/authAction";
import { ROUTER_PATH } from "../../common/routerLink";
import { Status } from "../../common/types";

import useCalculateTotal from "../../hooks/useCalculateTotal";
import { actRemoveAllCart } from "../../redux/actions/cart/cartAction";
import { editProduct, getProductsById } from "../../apis/productApi";
import Country from "./Country";

const schema = Yup.object({
  address: VALIDATE_YUP.DESCRIPTION,
  phone: VALIDATE_YUP.PHONE,
});

const Pay = () => {
  const [ischeckout, setIsCheckout] = useState(false);
  const [delivery, setDelivery] = useState("");
  const [payment, setPayment] = useState("");
  const [country, setCountry] = useState("");

  const history = useHistory();
  const { height } = useSelector((state) => state.headerReducer);
  const { listCart } = useSelector((state) => state.cartReducer);
  const { profile } = useSelector((state) => state.authReducer);
  const { isOrderLoading } = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();
  const priceTotal = useCalculateTotal(listCart);
  useEffect(() => {
    dispatch(actGetAllOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useBackPage();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    if (delivery === "" || payment === "") {
      toast.warning("Hãy chọn phương thức thanh toán và giao hàng");
      return;
    }

    const data = {
      ...profile,
      ...values,
      delivery,
      payment,
      country,
    };
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        dispatch(actChangeProfile(data));
        toast.success("Thành công");
        setIsCheckout(true);
        reset();
      }, 2000);
    });
  };
  const handleUpdateProduct = async () => {
    await listCart.forEach((cart) => {
      let product = getProductsById(cart.id);
      product.then((pro) => {
        editProduct(
          {
            ...pro,
            quantity: pro.quantity - cart.quantity,
            sold: pro.sold ? pro.sold + cart.quantity : 0 + cart.quantity,
          },
          cart.id
        );
      });
    });
  };

  const handleCheckOut = () => {
    if (ischeckout) {
      const profileClone = { ...profile };
      const data = {
        ...profileClone,
        status: Status.PROCESSING,
        cart: listCart,
        userId: profileClone.id,
        dateAdd: new Date().getTime(),
        total: priceTotal,
      };
      delete data.id;
      dispatch(actAddOrder(data));
      handleUpdateProduct();
      dispatch(actRemoveAllCart());
      alert("order thành công, đến xem thông tin đơn hàng");
      history.push(ROUTER_PATH.ORDERSTATUS.path);
      dispatch(actRemoveAllCart());
    } else {
      toast.info("Nhập thông tin đi bạn ");
    }
    setIsCheckout(false);
  };

  return (
    <div className="checkout-pay" style={{ paddingTop: height }}>
      <ToastContainer />
      <div className="container ">
        <div className="relative w-full">
          <div className="pay-checkout">
            {/* title */}
            <h2 className="title inline-block" onClick={() => history.goBack()}>
              <BsArrowLeft className="icon-back mr-5 inline-block"></BsArrowLeft>
              <span>Checkout</span>
            </h2>

            <Form handleSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[50px]">
                <Info control={control} errors={errors}></Info>
                <Country country={country} setCountry={setCountry} />
                <Delivery setDelivery={setDelivery}></Delivery>
                <Payment payment={payment} setPayment={setPayment}></Payment>
              </div>

              <button type="submit" className="btn-submit w-[200px]">
                {isSubmitting ? (
                  <div
                    className={`w-9 h-9 rounded-full mx-auto  border-3 animate-spin border-t-transparent `}
                  ></div>
                ) : (
                  "Save"
                )}
              </button>
            </Form>
          </div>
          <div className="pay-order">
            <h2 className="title mb-5">Order</h2>

            <div className="max-h-[400px] h-full overflow-y-auto order-list">
              {listCart?.map((item) => (
                <OrderItem key={item.id} product={item}></OrderItem>
              ))}
            </div>
            <div className="order-bott">
              <div className="mb-5 pt-5 ">
                <p>
                  Name
                  <span className="font-semibold ml-3">{profile.fullName}</span>
                </p>
                <p>
                  Email:
                  <span className="font-semibold ml-3">{profile.email}</span>
                </p>
                <p>
                  Phone:
                  <span className="font-semibold ml-3">
                    {profile.phone || ""}
                  </span>
                </p>
                <p>
                  Address:
                  <span className="font-semibold ml-3">
                    {profile.address || ""}
                  </span>
                </p>
              </div>
              <div>
                <h2>
                  <span className="mr-3">Total:</span>
                  <span>{priceTotal}</span>
                </h2>
              </div>
            </div>

            <button
              type="submit"
              className={`btn-submit w-full ${
                listCart.length <= 0 ? "pointer-events-none opacity-30" : ""
              }`}
              onClick={handleCheckOut}
            >
              {isOrderLoading ? (
                <div
                  className={`w-9 h-9 rounded-full mx-auto  border-3 animate-spin border-t-transparent `}
                ></div>
              ) : (
                "Checkout"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
