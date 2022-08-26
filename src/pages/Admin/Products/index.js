/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  Table,
  Space,
  Spin,
  Dropdown,
  Menu,
  Button,
  Popconfirm,
  Input,
} from "antd";
import {
  actGetAllProduct,
  actGetProductByFilter,
} from "../../../redux/actions/productAction";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductById } from "../../../apis/productApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalProduct from "./ModalProduct";
import { sharinganIcon } from "../../../components/Loading";
import { actGetAllCategory } from "../../../redux/actions/categoryAction";
import { SUCCESS_MESSAGE } from "../../../common/message";
import "../style.scss";
import { cancel, columnsAll, itemsShow } from "../../../common/table";
import BtnEdit from "../../../components/Button/BtnEdit";
import BtnAdd from "../../../components/Button/BtnAdd";
export default function Products() {
  const dispatch = useDispatch();
  const { listProducts, isLoading } = useSelector(
    (state) => state?.productReducer
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [productEdit, setProductEdit] = useState("");
  const [show, setShow] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const { listCategory } = useSelector((state) => state?.categoryReducer);

  const handleFilter = ({ key }) => {
    dispatch(actGetProductByFilter({ categoryId: key }));
  };
  const handleFilterShow = ({ key }) => {
    dispatch(actGetAllProduct());
    // dispatch(actGetAllCategory());
    setShow(key);
  };
  const menuShow = <Menu onClick={handleFilterShow} items={itemsShow} />;
  const menu = (
    <Menu
      onClick={handleFilter}
      items={listCategory.map((cat) => {
        return {
          label: cat.categoryName,
          key: cat.id,
        };
      })}
    />
  );
  const columns = [
    ...columnsAll.columnPro,
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <div onClick={() => showModalEdit(record)}>
            <BtnEdit />
          </div>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDeleteProduct(record)}
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
  const showModalAdd = () => {
    setModalTitle("Add");
    setIsModalVisible(true);
  };
  const showModalEdit = (product) => {
    setProductEdit(product);
    setModalTitle("Edit");
    setIsModalVisible(true);
  };

  const handleDeleteProduct = async (product) => {
    toast.success(SUCCESS_MESSAGE.DELETE_SUCCESS, { autoClose: 1000 });
    await deleteProductById(product.id);
    dispatch(actGetAllProduct());
  };
  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    dispatch(actGetAllProduct());
    dispatch(actGetAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    searchValue && dispatch(actGetProductByFilter({ q: searchValue }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <>
      <ToastContainer />

      <div className="container-fluid mt-5">
        <h1>Products</h1>
        <div className="row pb-4 mt-2">
          <div className="col-xl-12">
            <Dropdown overlay={menuShow}>
              <a onClick={(e) => e.preventDefault()}>
                <Button type="primary">Show</Button>
              </a>
            </Dropdown>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Button type="primary">Categories</Button>
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

            <div className="float-right " onClick={() => showModalAdd()}>
              <BtnAdd />
            </div>
            <ModalProduct
              modalTitle={modalTitle}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              productEdit={productEdit}
            />
          </div>
        </div>
        {isLoading ? (
          <div className="loading-display">
            <Spin indicator={sharinganIcon} />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={listProducts}
            rowKey="id"
            className="table-style"
            pagination={{ defaultPageSize: show }}
          />
        )}
      </div>
    </>
  );
}
