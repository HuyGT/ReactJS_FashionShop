import React, { useEffect } from "react";
import Sliders from "../../components/sliders/Sliders";
import useTotop from "../../hooks/useTotop";
import BlogMain from "./BlogMain";
import BlogNav from "./BlogNav";

import "./style.scss";

const Product = () => {
  const handleScrollToTop = useTotop();
  useEffect(() => {
    handleScrollToTop();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="Blog">
      <Sliders bgImg="bg-slider-shop1"></Sliders>
      <div className="container blog-wrapp">
        <BlogMain></BlogMain>
        <BlogNav></BlogNav>
      </div>
    </div>
  );
};

export default Product;
