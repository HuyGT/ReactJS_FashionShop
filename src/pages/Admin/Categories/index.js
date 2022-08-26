/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Table, Space, Modal, Form, Input, Popconfirm } from "antd";
import { actGetAllCategory } from "../../../redux/actions/categoryAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addCategory,
  deleteCategoryById,
  editCategory,
} from "../../../apis/categoryApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sharinganIcon } from "../../../components/Loading";
import { SUCCESS_MESSAGE } from "../../../common/message";
import "../style.scss";
import { cancel, columnsAll, config, layout } from "../../../common/table";
import BtnEdit from "../../../components/Button/BtnEdit";
import BtnAdd from "../../../components/Button/BtnAdd";
export default function Categories() {
  const { listCategory, isLoading } = useSelector(
    (state) => state?.categoryReducer
  );

  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(actGetAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showModalAdd = () => {
    form.resetFields();
    setModalTitle("Add");
    setIsModalVisible(true);
  };
  const showModalEdit = (category) => {
    form.setFieldsValue(category);
    setCategoryEdit(category);
    setModalTitle("Edit");
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteCategory = async (category) => {
    toast.success(SUCCESS_MESSAGE.DELETE_SUCCESS, { autoClose: 1000 });
    await deleteCategoryById(category.id);
    dispatch(actGetAllCategory());
  };
  const handleSubmit = async (category) => {
    let isValid = true;
    listCategory.forEach((cate) => {
      if (category.categoryName === cate.categoryName) {
        isValid = false;
      }
    });
    if (modalTitle === "Add") {
      if (isValid) {
        toast.success("Add Success", { autoClose: 1000 });
        await addCategory(category);
        dispatch(actGetAllCategory());
        form.resetFields();
        setIsModalVisible(false);
      } else {
        toast.error("Category name already exists !!!", { autoClose: 1000 });
      }
    } else {
      toast.success("Edit Success", { autoClose: 1000 });
      await editCategory(category, categoryEdit.id);
      dispatch(actGetAllCategory());
      setIsModalVisible(false);
    }
  };

  const columns = [
    ...columnsAll.columnCat,
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
            title="Are you sure to delete this category?"
            onConfirm={() => handleDeleteCategory(record)}
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

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        sharinganIcon
      ) : (
        <div className="container-fluid mt-5">
          <div className="title">
            <h1>Categories</h1>
            <div onClick={() => showModalAdd()}>
              <BtnAdd />
            </div>
            <Modal
              title={modalTitle === "Add" ? "Add Form" : "Edit Form"}
              visible={isModalVisible}
              onOk={() => form.submit()}
              onCancel={handleCancel}
            >
              <Form {...layout} form={form} onFinish={handleSubmit}>
                <Form.Item
                  label="Name"
                  name={["categoryName"]}
                  rules={[...config.ruleCat]}
                >
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </div>
          <Table
            columns={columns}
            dataSource={listCategory}
            rowKey="id"
            className="table-style"
          />
          ;
        </div>
      )}
    </>
  );
}
