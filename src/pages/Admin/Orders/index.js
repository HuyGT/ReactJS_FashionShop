/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  Table,
  Space,
  Spin,
  Popconfirm,
  Dropdown,
  Button,
  Input,
  Menu,
} from "antd";
import {
  actGetAllOrder,
  actGetOrderByFilter,
} from "../../../redux/actions/orderAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sharinganIcon } from "../../../components/Loading";
import { SUCCESS_MESSAGE } from "../../../common/message";
import { deleteOrderById } from "../../../apis/orderApi";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../../common/routerLink";
import {
  cancel,
  columnsAll,
  itemsFilter,
  itemsShow,
} from "../../../common/table";
import { SearchOutlined } from "@ant-design/icons";
import "../style.scss";
import BtnView from "../../../components/Button/BtnView";
export default function Orders() {
  const { listOrder, isOrderLoading } = useSelector(
    (state) => state?.orderReducer
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(5);
  const [searchValue, setSearchValue] = useState("");

  const handleRedirectOrder = (order) => {
    history.push(
      generatePath(ROUTER_PATH.DETAIL_ORDER.path, {
        id: order.id,
      })
    );
  };
  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleDeleteOrder = async (order) => {
    toast.success(SUCCESS_MESSAGE.DELETE_SUCCESS, { autoClose: 1000 });
    await deleteOrderById(order.id);
    dispatch(actGetAllOrder());
  };
  const handleFilter = ({ key }) => {
    dispatch(actGetOrderByFilter({ status: key }));
  };
  const handleFilterShow = ({ key }) => {
    dispatch(actGetAllOrder());
    setShow(key);
  };
  const menuShow = <Menu onClick={handleFilterShow} items={itemsShow} />;
  const menu = <Menu onClick={handleFilter} items={itemsFilter} />;

  const columns = [
    ...columnsAll.columnOrder,
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <div onClick={() => handleRedirectOrder(record)}>
            <BtnView />
          </div>
          <Popconfirm
            title="Are you sure to delete this order?"
            onConfirm={() => handleDeleteOrder(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <button className="bt btn-danger">
              <i className="fa-solid fa-trash"></i>
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(actGetAllOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(actGetOrderByFilter({ q: searchValue }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <>
      <ToastContainer />

      <div className="container-fluid mt-5">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <div className="row pb-4 mt-2">
          <div className="col-xl-12">
            <Dropdown overlay={menuShow}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Button type="primary">Show</Button>
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Button type="primary">Status</Button>
                </Space>
              </a>
            </Dropdown>
            <Input
              autoFocus
              defaultValue={searchValue}
              placeholder="Input search value"
              prefix={<SearchOutlined />}
              style={{ width: "30%" }}
              onChange={(e) => handleInputSearch(e)}
            />
          </div>
        </div>
        {isOrderLoading ? (
          <div className="loading-display">
            <Spin indicator={sharinganIcon} />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={listOrder}
            rowKey="id"
            className="table-style"
            pagination={{ defaultPageSize: show }}
          />
        )}
      </div>
    </>
  );
}
