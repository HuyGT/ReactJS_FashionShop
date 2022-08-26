import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { ROUTER_PATH } from "../../common/routerLink";
import Sliders from "../../components/sliders/Sliders";
import CardProduct from "../../components/cardProduct/CardProduct";
import ImageSlider from "./ImageSlider";
import Experts from "./Experts";
import useCheckDisplay from "../../hooks/useCheckDisplay";
import HighlightSlogan from "../../components/highlightSlogan/HighlightSlogan";
import SlickSlider from "../../components/slickSlider/SlickSlider";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";

import image1 from "../../assets/image/slider_nav4.jpg";
import image2 from "../../assets/image/slider_nav2.jpg";
import image3 from "../../assets/image/slider_nav5.jpg";
import image4 from "../../assets/image/banner11.jpg";
import image5 from "../../assets/image/banner10.jpg";
import image6 from "../../assets/image/banner2.jpg";
import image7 from "../../assets/image/banner9.jpg";

import { expertsData } from "./mookData";
import { actGetAllProduct } from "../../redux/actions/productAction";
import useTotop from "../../hooks/useTotop";

const arrImage = [image1, image2, image3, image3];

const Home = () => {
  const { listProducts } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [widthBrowse, setWidthBrowse] = useState(0);

  const handleScrollToTop = useTotop();
  useEffect(() => {
    handleScrollToTop();
  }, [handleScrollToTop]);

  useEffect(() => {
    const width = window.innerWidth;
    setWidthBrowse(width);
  }, [widthBrowse]);

  useEffect(() => {
    dispatch(actGetAllProduct());
  }, [dispatch]);

  const cardProduct = useCheckDisplay(8, listProducts);

  console.log(cardProduct);
  const history = useHistory();

  const handleToColection = () => {
    history.push(ROUTER_PATH.COLLECTION.path);
  };

  return (
    <div className="home_page">
      <Sliders isHome bgImg="bg-slider-home">
        <div className="container silder-slogan__wrapp">
          <h1 className="slogan-title">Color your days and make your story</h1>
          <p className="slogan_sub">
            Don't wory abount your appearance today, we are here for you to
            provider what you need to color your day and let's make a beatiful
            story today
          </p>
          <p className="text-center">- Unlock your style -</p>

          <Link to={ROUTER_PATH.SHOP.path} className="btn-toShop">
            Shop now
          </Link>
        </div>
      </Sliders>
      <div className="container">
        <HighlightSlogan
          title={`"Your appearance today is a reflection of your condition today, So
            choose your the best outfit your best day today"`}
        ></HighlightSlogan>
        <div className="slide_nav_wrapp">
          <div className="slide_nav ">
            <SlickSlider
              slidesToShow={widthBrowse < 768 ? 1 : 3}
              style={`marginRight: '-8px'`}
            >
              {arrImage.length > 0 &&
                arrImage.map((imageSlider, index) => (
                  <ImageSlider
                    key={index}
                    imageSlider={imageSlider}
                  ></ImageSlider>
                ))}
            </SlickSlider>
          </div>
        </div>

        <HighlightSlogan title="Popular Collection"></HighlightSlogan>
        <CardProduct cardProduct={cardProduct}></CardProduct>
        {/*  Explore Collection */}
        <div className="flex items-center collection">
          <div className="flex-1">
            <img className="collection-image" src={image5} alt="" />
          </div>
          <div className="collection-slogan__wrapp">
            <h1 className="collection-title">The PerFect Collection</h1>
            <p className="collection_sub">
              A collection of fashions that are diverse in brand styles and
              trends of the year, So you can choose what you want
            </p>
            <button className="btn-collection" onClick={handleToColection}>
              Explore Collection
            </button>
          </div>
        </div>
        <div className="flex gap-5 wrapper-shop-gender">
          <div className="flex-1 relative">
            <img src={image6} alt="" />
            <div className="gender">
              <Link to={ROUTER_PATH.SHOP_WOMAN.path}>Shop Woman</Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <img src={image7} alt="" />
            <div className="gender">
              <Link to={ROUTER_PATH.SHOP_MAN.path}>Shop Man</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="experts-story-wrapp">
        <div className="container">
          <h2 className="title">Experts Story</h2>
          <div className="slide_nav_wrapp">
            <div className="slide_nav  experts-story">
              <SlickSlider slidesToShow={3} clWhite>
                {expertsData.length &&
                  expertsData.map((item) => (
                    <Experts key={item.id} image={image2}></Experts>
                  ))}
              </SlickSlider>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="home-footer">
          <img className="rounded-xl" src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
