import React, { useEffect, useRef } from "react";

import Sliders from "../../components/sliders/Sliders";
import HighlightSlogan from "../../components/highlightSlogan/HighlightSlogan";
import { useSelector, useDispatch } from "react-redux";
import "./manStyle.scss";

// import { productMan } from "./mookData";

import image from "../../assets/image/banner9.jpg";
import CardProduct from "../../components/cardProduct/CardProduct";
import useCheckDisplay from "../../hooks/useCheckDisplay";
import Paging from "../../components/paging/Paging";
import {
  actGetProductByGender,
  actGetProductByPage,
} from "../../redux/actions/productAction";
import Cart from "../../components/cart/Cart";
import useTotop from "../../hooks/useTotop";

const limit = 8;

const ShopMan = () => {
  const ShopManContentRef = useRef();
  const { listProducts, isLoading } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  const productMain = useCheckDisplay(4, listProducts);

  const handleScrollToTop = useTotop();
  useEffect(() => {
    handleScrollToTop();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const data = {
      page: 1,
      limit,
      gender: "man",
    };
    dispatch(actGetProductByPage(data));
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      const top =
        ShopManContentRef.current.offsetTop -
        ShopManContentRef.current.offsetHeight;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }, [isLoading]);

  const handleCallAllApi = () => {
    dispatch(actGetProductByGender("man"));
  };
  const handleCallPage1 = (page) => {
    const data = {
      page,
      limit,
      gender: "man",
    };
    dispatch(actGetProductByPage(data));
  };
  const handleCallPage2 = (page) => {
    const data = {
      page,
      limit,
      gender: "man",
    };
    dispatch(actGetProductByPage(data));
  };

  return (
    <div className="shop-man">
      <Sliders bgImg="bg-slider-shop5">
        <div className="container silder-slogan__wrapp  shop-man-slider_slogan">
          <h1 className="slogan-title">Your outfit express who you ape</h1>
          <p className="slogan_sub">
            Don't wory abount your appearance today, we are here for you to
            provider what you need to color your day and let's make a beatiful
            story today
          </p>
          <p className="text-center">Yout outfit express who you ape</p>
        </div>
      </Sliders>

      <HighlightSlogan>
        <h2 className="title">Clothes make the man</h2>
        <p className=" text-center mt-4">
          Clothes and manners do not make the man; but when he is made, they
          greatly improve his appearance
        </p>
      </HighlightSlogan>

      {/* conten-top */}
      <div className="container">
        <div className="flex flex-row-reverse items-center shop-man-content-top">
          <div className="flex-1">
            <img className="shop-man-content-top-image" src={image} alt="" />
          </div>
          <div className="shop-man-content-top-slogan__wrapp">
            <h1 className="shop-man-content-top-title">Forget the rule</h1>
            <p className="shop-man-content-top_sub">
              Wear it in the way you like it and make your own rule
            </p>
          </div>
        </div>
        <HighlightSlogan>
          <h2 className="title">The world is full of guys, be a man</h2>
          <p className=" text-center mt-4">
            lothes and manners do not make the man; but when he is made, they
            greatly improve his appearance
          </p>
        </HighlightSlogan>
        {/* product-main */}
        <CardProduct cardProduct={productMain}></CardProduct>
      </div>
      {/* banner */}
      <div className="banner">
        <div className="container banner-conten">
          <h3>
            Fashion is a language that creates itself in clothes to interpret
            reality
          </h3>
        </div>
      </div>
      <div ref={ShopManContentRef} className="container">
        <CardProduct cardProduct={listProducts}></CardProduct>
        <Cart></Cart>
        <Paging
          handleCallAllApi={handleCallAllApi}
          handleCallPage1={handleCallPage1}
          handleCallPage2={handleCallPage2}
        ></Paging>
      </div>
    </div>
  );
};

export default ShopMan;
