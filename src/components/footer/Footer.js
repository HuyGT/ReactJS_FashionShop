import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const socialImg = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1497340525489-441e8427c980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container menu_footer-wrapp">
          <div className="menu_footer">
            <h4 className="title">USEFUL INFORMATION</h4>
            <ul className="nav_menu-footer">
              <li>
                <Link to="" className="nav_menu-link">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  Payment
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  FAQ’s
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu_footer">
            <h4 className="title">HELP</h4>
            <ul className="nav_menu-footer">
              <li>
                <Link to="" className="nav_menu-link">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  Authors
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu_footer">
            <h4 className="title">OUR COMMUNITY</h4>
            <ul className="nav_menu-footer">
              <li>
                <Link to="" className="nav_menu-link">
                  Community
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  Forums
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu_footer connect-social">
            <h4 className="title">Connect with us</h4>
            <div className="wrapp-image-social">
              {socialImg.length > 0 &&
                socialImg.map((item) => (
                  <div key={item.id} className="wrapp-img">
                    <img src={item.imgUrl} alt="" />
                  </div>
                ))}
            </div>
            <p className="desc">
              Follow us to stay in the loop on what's new width Bindi.
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>© 2022 NikaStore, All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
