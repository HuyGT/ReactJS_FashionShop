import React, { useRef, useState } from "react";
// import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import useTotop from "../../hooks/useTotop";
import ChooseColor from "./ChooseColor";
import { useDispatch } from "react-redux";

import image2 from "../../assets/image/size-img.jpg";
import image3 from "../../assets/image/slider_nav5.jpg";
import {
  actAddCart,
  actChangeQuantityCart,
  actChangeWishList,
} from "../../redux/actions/cart/cartAction";
import { modalAction } from "../../redux/actions/modal";
import { Rate } from "antd";
import { ToastContainer } from "react-toastify";

const DetailProduct = ({ product, listCart, rate, count }) => {
  const imageDetailRef = useRef();
  const handleScrollToTop = useTotop();
  const [gender, setIsMale] = useState("male");
  const [valueColor, setValueColor] = useState("brown");
  const [valueSize, setValueSize] = useState("s");

  const dispatch = useDispatch();

  console.log(product);
  const handleAddToCart = () => {
    const productClone = { ...product };
    const quantity = 1;
    const cartItem = {
      ...productClone,
      quantity,
      valueColor,
      valueSize,
    };
    const isInCart = listCart.some((item) => item.id === product.id);
    const index = listCart.findIndex((item) => item.id === product.id);

    if (productClone.quantity === 0) {
      return;
    }

    if (isInCart) {
      const quantity = listCart[index].quantity + 1;
      dispatch(actChangeQuantityCart({ id: product.id, quantity }));
    } else {
      dispatch(actAddCart(cartItem));
    }
    dispatch(modalAction.actShowModal());
    handleScrollToTop();
  };

  const handleAddWidhList = (id) => {
    handleScrollToTop();
    dispatch(actChangeWishList({ wishList: true, id }));
  };

  const handleShowImg = (e) => {
    const imgSrc = e.target.src;
    imageDetailRef.current.src = imgSrc;
  };

  return (
    <>
      <ToastContainer />
      <div className="detail-content">
        <div className="detail-image">
          <div className="detail-sub-image">
            {product?.imageRelated?.map((image,key) => (
              <div key={key} className="w-[100px] h-[150px] mb-5">
                <img
                  className={`product-detail__nav w-full h-full cursor-pointer object-cover ${
                    image.active && "active"
                  }`}
                  src={image}
                  alt="img product nav"
                  onClick={handleShowImg}
                />
              </div>
            ))}
          </div>
          <div className="h-full w-full">
            <img
              ref={imageDetailRef}
              className="w-full transition-all ease-linear h-full cursor-pointer object-cover"
              src={product?.image}
              alt="img product"
            />
          </div>
        </div>
        <div className="detail-main-info">
          <div className="reviews">
            {/* {Array(5)
              .fill(null)
              .map((statr, index) => (
                <AiFillStar key={index} className="text-yellow-400"></AiFillStar>
              ))} */}
            <Rate value={rate} disabled />
            <span className="ml-5">{count} Reviews</span>
          </div>
          <h2 className="title-name text-line-2 ">{product?.productName}</h2>
          <p className="price">
            <span>keepsake</span>
            <BsDot></BsDot>
            <span>{product?.price || "120"}$</span>
          </p>
          <p className="desc-product text-line-3">{product?.description}</p>
          <div className="pr-[100px] flex flex-col flex-1">
            {/* color */}
            <div className="color-product mb-5">
              <p className="uppercase mb-4">color</p>
              <div className="flex gap-5 items-center">
                <ChooseColor
                  classTag="product-color"
                  color="#815137"
                  active
                  onClick={() => setValueColor("brown")}
                ></ChooseColor>
                <ChooseColor
                  classTag="product-color"
                  color="#6A5AF9"
                  onClick={() => setValueColor("blue")}
                ></ChooseColor>
                <ChooseColor
                  classTag="product-color"
                  color="#fd656b"
                  onClick={() => setValueColor("orange")}
                ></ChooseColor>
              </div>
            </div>
            {/* gender */}
            <div>
              <p className="uppercase mb-4">Size guide</p>
              <button
                className={`btn-guide ${gender === "male" && "active"}`}
                onClick={() => setIsMale("male")}
              >
                male
              </button>
              <button
                className={`btn-guide ${gender === "female" && "active"}`}
                onClick={() => setIsMale("female")}
              >
                female
              </button>
              <div className="w-full h-[180px] my-10">
                {gender === "male" ? (
                  <img
                    className="w-full h-full object-cover"
                    src={image2}
                    alt="male"
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={image3}
                    alt="female"
                  />
                )}
              </div>
            </div>
            {/* size */}
            <div className="mb-10">
              <p className="uppercase ">Size</p>
              <div className="flex ml-20 gap-5 items-center">
                <ChooseColor
                  classTag="product-size"
                  active
                  size
                  onClick={() => setValueSize("s")}
                >
                  S
                </ChooseColor>
                <ChooseColor
                  classTag="product-size"
                  size
                  onClick={() => setValueSize("m")}
                >
                  M
                </ChooseColor>
                <ChooseColor
                  classTag="product-size"
                  size
                  onClick={() => setValueSize("xl")}
                >
                  XL
                </ChooseColor>
              </div>
            </div>
            {/* action */}
            <div className="flex gap-5 mt-auto">
              <button
                className={`flex-1 p-3 btn-add-cart ${
                  product.quantity === 0
                    ? "opacity-50 pointer-events-none, cursor-default"
                    : ""
                }`}
                onClick={handleAddToCart}
              >
                {product.quantity === 0 ? "Out of stock" : "Add to cart"}
              </button>
              <button
                className="flex-1 p-3 btn-add-cart__wish-List"
                onClick={() => handleAddWidhList(product.id)}
              >
                Add width wish List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
