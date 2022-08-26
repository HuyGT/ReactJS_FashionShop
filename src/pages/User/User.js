import React from "react";
import { useSelector } from "react-redux/es/exports";
import { BiHistory } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineStar, AiOutlineIdcard } from "react-icons/ai";
import "./style.scss";

import { Link } from "react-router-dom";
import CustomerItem from "./CustomerItem";
import { ROUTER_PATH } from "../../common/routerLink";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import useBackPage from "../../hooks/useBackPage";

const User = () => {
  useBackPage();
  const { height } = useSelector((state) => state.headerReducer);
  const { profile } = useSelector((state) => state.authReducer);

  return (
    <div className="user_customer " style={{ paddingTop: height }}>
      <div className="container">
        <SidebarProfile></SidebarProfile>
        <div className="customer_right">
          <div className="customer_right-top">
            <h2 className="font-semibold text-4xl mb-3 title_name">
              Account: {profile.fullName}
            </h2>
            <p className="text-3xl">Quản lý thông tin cá nhân</p>
          </div>
          <div className="customer_right-body">
            <Link to={ROUTER_PATH.PROFILE.path} className="customer_item">
              <CustomerItem
                title="Thông tin cá nhân"
                desc="Chỉnh sửa hoặc cập nhận thông tin cá nhân"
              >
                <AiOutlineIdcard className="customer_icon"></AiOutlineIdcard>
              </CustomerItem>
            </Link>
            <Link to={"#"} className="customer_item">
              <CustomerItem
                title="Số dư & thanh toán"
                desc="Chỉnh sửa hoặc cập nhận thông tin cá nhân"
              >
                <MdOutlineAttachMoney className="customer_icon"></MdOutlineAttachMoney>
              </CustomerItem>
            </Link>
            <Link to={"#"} className="customer_item">
              <CustomerItem
                title="Lịch sử đơn hàng"
                desc="Xem lại thông tin đơn hàng của bạn"
              >
                <BiHistory className="customer_icon"></BiHistory>
              </CustomerItem>
            </Link>
            <Link to={"#"} className="customer_item">
              <CustomerItem
                title="Quản lý phản hồi"
                desc="Xem lại và cập nhận nội dung phản hồi"
              >
                <AiOutlineStar className="customer_icon"></AiOutlineStar>
              </CustomerItem>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
