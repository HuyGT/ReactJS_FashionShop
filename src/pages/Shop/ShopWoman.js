import React, { useEffect, useRef } from "react";
import HighlightSlogan from "../../components/highlightSlogan/HighlightSlogan";
import Sliders from "../../components/sliders/Sliders";
import { useSelector, useDispatch } from "react-redux";
import "./womanStyle.scss";

// import { productWoman as dataProduct } from "./mookData";

import image1 from "../../assets/image/banner13.jpg";
import image2 from "../../assets/image/banner14.jpg";
import image3 from "../../assets/image/slider_nav8.jpg";
import image4 from "../../assets/image/banner15.jpg";
import image5 from "../../assets/image/slider_nav9.jpg";

import CardProduct from "../../components/cardProduct/CardProduct";
import Paging from "../../components/paging/Paging";
import {
  actGetProductByGender,
  actGetProductByPage,
} from "../../redux/actions/productAction";
import Cart from "../../components/cart/Cart";
import useTotop from "../../hooks/useTotop";
import useScrollProduct from "../../hooks/useScrollProduct";

const limit = 8;

const ShopWoman = () => {
  const { listProducts, isLoading } = useSelector(
    (state) => state.productReducer
  );

  const { nodeRef } = useScrollProduct(isLoading);
  const dispatch = useDispatch();

  const handleScrollToTop = useTotop();
  useEffect(() => {
    handleScrollToTop();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const data = {
      page: 1,
      limit,
      gender: "woman",
    };
    dispatch(actGetProductByPage(data));
  }, [dispatch]);

  const handleCallAllApi = () => {
    dispatch(actGetProductByGender("woman"));
  };
  const handleCallPage1 = (page) => {
    const data = {
      page,
      limit,
      gender: "woman",
    };
    dispatch(actGetProductByPage(data));
  };
  const handleCallPage2 = (page) => {
    const data = {
      page,
      limit,
      gender: "woman",
    };
    dispatch(actGetProductByPage(data));
  };

  return (
    <div className="shop-woman">
      <Sliders bgImg="bg-slider-shop4">
        <div className="container silder-slogan__wrapp">
          <h1 className="slogan-title">Beautifull & Minimalist With Fashion</h1>
          <p className="slogan_sub">
            Don't wory abount your appearance today, we are here for you to
            provider what you need to color your day and let's make a beatiful
            story today
          </p>
          <p className="text-center">
            If you can't stop thnking about it... buy it!
          </p>
        </div>
      </Sliders>
      <div className="container">
        <HighlightSlogan title="Woman Shop">
          <p className="text-center pt-5 text-3xl leading-loose px-[100px]">
            NIKA products have Italian style but are very suitable for the body
            of Vietnamese people. The products are the quintessential
            combination of luxury fashion and elegant Asian style Guaranteed
            elegance and charm
          </p>
        </HighlightSlogan>
        <div className="woman-contail-top gap-5">
          <div className="flex flex-col gap-5">
            <div className="h-[500px]">
              <img src={image1} alt="" />
            </div>
            <div className="h-[200px]">
              <img src={image2} alt="" />
            </div>
          </div>
          <div className="flex flex-col-reverse gap-5">
            <div className="h-[500px]">
              <img src={image3} alt="" />
            </div>
            <div className="h-[200px]">
              <img src={image5} alt="" />
            </div>
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="banner">
        <div className="container banner-conten">
          <h3>A girl should be two things</h3>
          <h2> Classy & Fabulous</h2>
        </div>
      </div>
      {/* product */}
      <div ref={nodeRef} className="container product-top ">
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

export default ShopWoman;
