import React from "react";

import image1 from "../../assets/image/slider_nav4.jpg";

const date = "March 22nd 16";
const title = "POWERFUL TOTAL BLACK PIECES";

const LatestBlog = () => {
  return (
    <div className="lates-item cursor-pointer">
      <div className="img-wrapp h-[200px] w-full">
        <img className="w-full h-full object-cover" src={image1} alt="" />
      </div>
      <div className="lates-desc">
        <p className="lates-time">{date || "March 22nd 16"}</p>
        <h4>{title || "POWERFUL TOTAL BLACK PIECES"}</h4>
      </div>
    </div>
  );
};

export default LatestBlog;
