import React, { useEffect, useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";

import Cart from "../../components/cart/Cart";
import Paging from "../../components/paging/Paging";
import Sliders from "../../components/sliders/Sliders";
import useScrollProduct from "../../hooks/useScrollProduct";
import useTotop from "../../hooks/useTotop";
import {
  actGetAllProduct,
  actGetProductByName,
  actGetProductByPage,
} from "../../redux/actions/productAction";
import CardProduct from "./../../components/cardProduct/CardProduct";
// import { product as dataProduct } from "./mookData";
import "./storeStyle.scss";

const sliders = [
  "bg-slider-shop",
  "bg-slider-shop1",
  "bg-slider-shop2",
  "bg-slider-shop3",
];

const limit = 8;

const ShopStore = () => {
  const [bgImg, setBgImg] = useState("bg-slider-shop");
  const [valueInput, setValueInput] = useState("");
  const handleScrollToTop = useTotop();

  const { listProducts, isLoading } = useSelector(
    (state) => state.productReducer
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const { nodeRef } = useScrollProduct(isLoading);

  useEffect(() => {
    const pagination = {
      page: 1,
      limit,
    };
    dispatch(actGetProductByPage(pagination));
  }, [dispatch]);

  useEffect(() => {
    handleScrollToTop();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let img;
    const timmer = setInterval(() => {
      img = sliders[Math.floor(Math.random() * sliders.length)];
      setBgImg(img);
    }, 3000);

    return () => clearInterval(timmer);
  }, []);

  const handleClick = (e) => {
    const gender = e.target.textContent.toLowerCase();
    let location;

    switch (gender) {
      case "man":
        location = ROUTER_PATH.SHOP_MAN.path;
        break;
      case "women":
        location = ROUTER_PATH.SHOP_WOMAN.path;
        break;
      default:
        break;
    }
    history.push(location);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const valueSearch = valueInput.toLowerCase();
    dispatch(actGetProductByName(valueSearch));

    setValueInput("");
  };

  const handleCallAllApi = () => {
    dispatch(actGetAllProduct());
  };
  const handleCallPage1 = (page) => {
    const pagination = {
      page,
      limit,
    };
    dispatch(actGetProductByPage(pagination));
  };
  const handleCallPage2 = (page) => {
    const pagination = {
      page,
      limit,
    };
    dispatch(actGetProductByPage(pagination));
  };

  return (
    <div className="shop-store">
      <Sliders bgImg={bgImg}></Sliders>
      <div ref={nodeRef} className="store_nav-wrapp">
        <div className="container store_nav">
          <h2 className="title">Shop</h2>
          <div className="directional ">
            <p className="cursor-pointer" onClick={handleClick}>
              Man
            </p>
            <p className="cursor-pointer" onClick={handleClick}>
              Women
            </p>
            <p className="cursor-pointer" onClick={handleClick}>
              Kids
            </p>
          </div>
          <div className="search-wrapp">
            <div className="relative">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={valueInput}
                  className="search"
                  onChange={(e) => setValueInput(e.target.value)}
                  placeholder="Search"
                />
                <BiSearch
                  className="icon-search"
                  onClick={handleSearch}
                ></BiSearch>
              </form>
            </div>
            <AiOutlineHeart className="icon-hear cursor-pointer"></AiOutlineHeart>
          </div>
        </div>
      </div>
      <div className="container shop-content ">
        <div className="shop-wrapp-right">
          <CardProduct cardProduct={listProducts}></CardProduct>
          <Cart></Cart>
          <Paging
            handleCallAllApi={handleCallAllApi}
            handleCallPage1={handleCallPage1}
            handleCallPage2={handleCallPage2}
          ></Paging>
        </div>
      </div>
    </div>
  );
};

export default ShopStore;
