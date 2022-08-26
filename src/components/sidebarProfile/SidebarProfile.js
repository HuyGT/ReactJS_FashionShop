import React from "react";
import { useSelector } from "react-redux/es/exports";
import { BsPhoneVibrate } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaOpencart } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import "./style.scss";

import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import useClickOutSize from "../../hooks/useClickOutSize";
const avata =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

const SidebarProfile = () => {
  const { show, setShow, nodeRef } = useClickOutSize(
    ".menu-profile-responsive"
  );
  const { profile } = useSelector((state) => state.authReducer);
  return (
    <>
      <div
        ref={nodeRef}
        className="menu-profile-responsive"
        onClick={() => setShow(!show)}
      >
        <HiMenuAlt3 className="pointer-events-none"></HiMenuAlt3>
      </div>

      <div
        className={`container relative modal-sidebarProfile-responsive ${
          show && "active"
        }`}
      >
        <div ref={nodeRef} className={`sidebarProfile ${show && "active"}`}>
          <div className="sidebarProfile-top flex gap-10 mb-5">
            <div className=" w-[50px] h-[50px]">
              <img
                className="w-full h-full object-cover rounded-full"
                src={avata}
                alt="avata"
              />
            </div>
            <div>
              <h2 className="title_name">{profile.fullName}</h2>
              <p className="font-medium">
                {profile.role === "admin" ? "Admin" : "Người dùng"} tại
                NIKAStore
              </p>
            </div>
          </div>
          <ul className="sidebarProfile-bottom">
            <li>
              <Link
                to={"#"}
                className="font-medium py-4 flex gap-3 items-center"
              >
                <GiCutDiamond className="w-[20px] h-[20px]"></GiCutDiamond>
                <span>Thành viên vàng</span>
              </Link>
            </li>
            <li>
              <Link
                to={ROUTER_PATH.PAY.path}
                className="font-medium py-4 flex gap-3 items-center"
              >
                <FaOpencart className="w-[20px] h-[20px]"></FaOpencart> CheckOut
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="font-medium py-4 flex gap-3 items-center"
              >
                <BsPhoneVibrate className="w-[20px] h-[20px]"></BsPhoneVibrate>
                <span>Hỗ trợ</span>
              </Link>
            </li>
            <li>
              <Link
                to={ROUTER_PATH.ORDERSTATUS.path}
                className="font-medium py-4 flex gap-3 items-center"
              >
                <TbTruckDelivery className="w-[20px] h-[20px]"></TbTruckDelivery>
                <span>Tình trạng đơn hàng</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarProfile;
