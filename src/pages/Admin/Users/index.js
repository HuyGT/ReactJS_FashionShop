/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Table, Space, Spin, Popconfirm } from "antd";
import { actGetAllUser } from "../../../redux/actions/userAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserById } from "../../../apis/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sharinganIcon } from "../../../components/Loading";
import { SUCCESS_MESSAGE } from "../../../common/message";
import ModalUser from "./ModalUser";
import { cancel, columnsAll } from "../../../common/table";
import "../style.scss";
import BtnEdit from "../../../components/Button/BtnEdit";
import BtnAdd from "../../../components/Button/BtnAdd";
export default function Users() {
  const { listUser, isLoading } = useSelector((state) => state?.userReducer);

  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [userEdit, setUserEdit] = useState("");

  const showModalAdd = () => {
    setModalTitle("Add");
    setIsModalVisible(true);
  };
  const showModalEdit = (user) => {
    setUserEdit(user);
    setModalTitle("Edit");
    setIsModalVisible(true);
  };

  const handleDeleteUser = async (user) => {
    toast.success(SUCCESS_MESSAGE.DELETE_SUCCESS, { autoClose: 1000 });
    await deleteUserById(user.id);
    dispatch(actGetAllUser());
  };

  const columns = [
    ...columnsAll.columnUser,
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
            title="Are you sure to delete this user?"
            onConfirm={() => handleDeleteUser(record)}
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
    dispatch(actGetAllUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <div className="loading-display">
          <Spin indicator={sharinganIcon} />
        </div>
      ) : (
        <div className="container-fluid mt-5">
          <div className="title">
            <h1>Users</h1>

            <div onClick={() => showModalAdd()}>
              <BtnAdd />
            </div>
            <ModalUser
              modalTitle={modalTitle}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              userEdit={userEdit}
            />
          </div>
          <Table
            columns={columns}
            dataSource={listUser}
            rowKey="id"
            className="table-style"
          />
          ;
        </div>
      )}
    </>
  );
}
