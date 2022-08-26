import React, { useEffect, useMemo, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import { AuthTypes } from "../../common/types";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import useBackPage from "../../hooks/useBackPage";
import { actGetOrderByFilter } from "../../redux/actions/orderAction";
import "./style.scss";
import TableOrder from "./TableOrder";
import {sharinganIcon} from "../../components/Loading";

const OrderStatus = () => {
  useBackPage();
  const { height } = useSelector((state) => state.headerReducer);
  const { listOrder, isOrderLoading } = useSelector(
    (state) => state?.orderReducer
  );
  // const [orderFilter, setOrderFilter] = useState(false);
  const { profile } = useSelector((state) => state.authReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  // const orders = useMemo(() => {
  //   listOrder.filter(
  //     (item) => item.email === profile.email && item.userId === profile.id
  //   );
  // }, [listOrder, profile.email, profile.id]);
  useEffect(() => {
    dispatch(actGetOrderByFilter({ email: profile.email }));
    // setOrderFilter(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="order-status" style={{ paddingTop: height }}>
      <div className="container">
        <SidebarProfile></SidebarProfile>
        <div className="order-status-wrapp">
          <h2
            className="title inline-block"
            onClick={() => history.push(ROUTER_PATH.USER.path)}
          >
            <BsArrowLeft className="icon-back inline-block mr-5"></BsArrowLeft>
            <span>Back to me</span>
          </h2>
          <div className="order-status">
            {isOrderLoading ? (
              sharinganIcon
            ) : (
              <TableOrder listOrder={listOrder ?  listOrder : ""}></TableOrder>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
