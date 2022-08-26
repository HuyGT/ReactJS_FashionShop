import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { columnsAll } from "../../common/table";
import { actGetOrderById } from "../../redux/actions/orderAction";
import { Steps } from "antd";
import { Status } from "../../common/types";
import { editOrder } from "../../apis/orderApi";
import { toast, ToastContainer } from "react-toastify";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";
import { BsArrowLeft } from "react-icons/bs";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import { ROUTER_PATH } from "../../common/routerLink";

export default function DetailOrder() {
  const { id } = useParams();
  const { Step } = Steps;
  const dispatch = useDispatch();
  const { detailOrder } = useSelector((state) => state?.orderReducer);
  const listCart = detailOrder.cart;
  const history = useHistory();
  useEffect(() => {
    dispatch(actGetOrderById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(actGetOrderById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailOrder]);
  const handleStatus = () => {
    if (detailOrder.status === Status.PROCESSING) {
      return 0;
    } else if (detailOrder.status === Status.SHIPPING) {
      return 1;
    } else if (detailOrder.status === Status.DELIVERED) {
      return 3;
    } else if (detailOrder.status === Status.CANCELED) {
      return 2;
    }
  };
  const handleStatusError = () => {
    if (detailOrder.status === Status.CANCELED) {
      return "error";
    }
  };
  const handleCancelOrder = async () => {
    toast.success("Order has been cancelled success", { autoClose: 1000 });
    await editOrder({ ...detailOrder, status: Status.CANCELED }, id);
  };

  const dateOrder = new Date(detailOrder.dateAdd).toLocaleString();
  const columns = [...columnsAll.columnDetailOrder];
  return (
    <>
      <ToastContainer />

      <div className="order-status">
        <div className="container">
          <SidebarProfile></SidebarProfile>

          <div className="order-status-wrapp">
            <h2
              className="title inline-block"
              onClick={() => history.push(ROUTER_PATH.ORDERSTATUS.path)}
            >
              <BsArrowLeft className="icon-back inline-block mr-5"></BsArrowLeft>
              <span>Back to me</span>
            </h2>
            <div className="title-detail">
              <h1>Detail Order</h1>
              <p>#{id}</p>
            </div>
            <hr></hr>
            <div className="row pt-3 pb-3">
              <div className="col-style">
                <p>Customer: </p>
                <h4 className="fw-bold"> {detailOrder.fullName}</h4>
              </div>
              <p>Invoice Id: #{id}</p>
              <p>Email: {detailOrder.email}</p>
              <p>Address: {detailOrder.address}</p>
              <p>Phone: {detailOrder?.phone}</p>
              <p>Date order: {dateOrder}</p>
            </div>
            <div className="row p-5">
              <Steps current={handleStatus()} status={handleStatusError()}>
                <Step
                  title={Status.PROCESSING}
                  description={handleStatus() >= 1 ? "Complete" : "Waiting"}
                />
                <Step
                  title={Status.SHIPPING}
                  description={handleStatus() >= 2 ? "Complete" : "Waiting"}
                />
                <Step
                  title={Status.DELIVERED}
                  description={
                    handleStatus() >= 3
                      ? "Complete"
                      : handleStatusError()
                      ? "Canceled"
                      : "Waiting"
                  }
                />
              </Steps>
            </div>
            <Table
              columns={columns}
              dataSource={listCart}
              rowKey="id"
              className="table-style"
              pagination={false}
            />
            <hr />
            <div className="row p-3 text-end">
              <h1>Total: ${detailOrder.total}</h1>
            </div>
            <hr />
            <div className=" p-3 text-end">
              {detailOrder.status === Status.DELIVERED ||
              detailOrder.status === Status.CANCELED ? null : (
                <>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleCancelOrder()}
                  >
                    Cancel Order
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
