import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import useTotop from "../../hooks/useTotop";

import "./style.scss";

const BackTop = () => {
  const [isShow, setIsShow] = useState(false);
  const handleScrollToTop = useTotop();

  useEffect(() => {
    const number = 500;
    const handleIsShow = () => {
      if (window.scrollY > number) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    document.addEventListener("scroll", handleIsShow);

    return () => document.removeEventListener("scroll", handleIsShow);
  }, []);

  return (
    <div className="back-to-top">
      <div
        className={`to-top ${isShow ? "is-show" : ""}`}
        onClick={() => handleScrollToTop()}
      >
        <AiOutlineArrowUp className="icon-to-top"></AiOutlineArrowUp>
      </div>
    </div>
  );
};

export default BackTop;
