import React, { useState } from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/image/slider_nav4.jpg";
import LatestBlog from "./LatestBlog";

const BlogNav = () => {
  const [valueInput, setValueInput] = useState("");
  return (
    <div className="blog-nav">
      <div className="blog-nav-top">
        <div className="nav-img-wrapp">
          <img className="w-full h-full object-cover" src={image1} alt="" />
        </div>
        <div className="blog-nav-desc">
          <h2 className="title">ABOUT ME</h2>
          <p className="blog-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            itaque aliquam iste. Iusto, excepturi facilis corrupti reiciendis
            ratione, atque sapiente architecto mollitia illo facere aperiam
            numquam omnis dolorem minus quas?
          </p>
        </div>
      </div>

      {/* LATEST BLOG POSTS */}
      <div className="latest-blog">
        <h2 className="title">LATEST BLOG POSTS</h2>
        <div className="flex flex-col gap-5">
          <LatestBlog></LatestBlog>
          <LatestBlog></LatestBlog>
          <LatestBlog></LatestBlog>
        </div>
        {/* RELATED POSTS */}
        <div className="related-posts">
          <h3 className="title"> RELATED POSTS</h3>
          <div className="flex gap-3">
            {Array(2)
              .fill(null)
              .map((item, index) => (
                <div key={index} className="flex-1 cursor-pointer">
                  <div className="w-full h-[200px]">
                    <img
                      className="w-full h-full object-cover"
                      src={image1}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="title related-title">
                      NY FASHION WEEK OUTFITS
                    </h4>
                    <p className="related-dete">March 23rd 16</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* search */}
        <div className="py-[40px] search">
          <input
            type="text"
            className="input-control"
            placeholder="Search"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
        </div>
        <div>
          <h2 className="title mt-0">BLOG CATEGORIES</h2>
          <ul className="">
            <li className="">
              <Link to="#" className="categorie-link">
                Beauty
              </Link>
            </li>
            <li className="">
              <Link to="#" className="categorie-link">
                Culture
              </Link>
            </li>
            <li className="">
              <Link to="#" className="categorie-link">
                Fashion
              </Link>
            </li>
            <li className="">
              <Link to="#" className="categorie-link">
                Shopping
              </Link>
            </li>
            <li className="">
              <Link to="#" className="categorie-link">
                Trends
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;
