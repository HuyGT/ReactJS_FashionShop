import React from "react";
import { TbLogout } from "react-icons/tb";

import { actLogout } from "../../redux/actions/auth/authAction";
import { useDispatch } from "react-redux";
import useClickOutSize from "../../hooks/useClickOutSize";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import "./style.scss";
import { actRemoveAllCart } from "../../redux/actions/cart/cartAction";
import { AuthTypes } from "../../common/types";

const avata = JSON.parse(
  localStorage.getItem(AuthTypes.AUTH_LOCALSTORAGE)
)?.avatar;
const avatarDefault =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const Accout = ({ profile }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { show, nodeRef, setShow } = useClickOutSize(".img_avata");
  const handleProfile = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    dispatch(actLogout());
    dispatch(actRemoveAllCart());
  };
  const handleToProfile = () => {
    history.push(ROUTER_PATH.USER.path);
  };

  return (
    <div className="author-avata_header rounded-full cursor-pointer relative">
      <div className="w-[40px] h-[40px]">
        <img
          className="w-full h-full  rounded-full  hover:opacity-80 img_avata"
          src={avata ? avata : avatarDefault}
          alt="avata"
          onClick={handleProfile}
        />
      </div>
      <div
        ref={nodeRef}
        className={`${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        } absolute right-0 author author-main_header transition`}
      >
        <div
          className="flex items-center author-sub rounded gap-3"
          onClick={handleToProfile}
        >
          <div className="w-[30px] h-[30px]">
            <img
              className="w-full h-full  rounded-full"
              src={avata ? avata : avatarDefault}
              alt="avata"
              onClick={handleProfile}
            />
          </div>
          <h2>{profile.fullName}</h2>
        </div>
        <div
          className="author-sub author_logout p-3 flex items-center gap-3"
          onClick={handleLogout}
        >
          <TbLogout style={{ fontSize: "2.5rem", width: "30px" }}></TbLogout>
          <h2 className="title">Log out</h2>
        </div>
      </div>
    </div>
  );
};

export default Accout;
