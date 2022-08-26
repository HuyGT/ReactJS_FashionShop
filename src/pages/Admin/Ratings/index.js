import React, { useEffect } from "react";
import { Table, Space, Popconfirm } from "antd";
import { actGetRatings } from "../../../redux/actions/ratingAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sharinganIcon } from "../../../components/Loading";
import "../style.scss";
import { cancel, columnsAll } from "../../../common/table";
import { deleteRatingById } from "../../../apis/ratingApi";
export default function Categories() {
  const { listRatings, isLoading } = useSelector(
    (state) => state?.ratingReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetRatings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteRating = async (rating) => {
    toast.success("Delete success", { autoClose: 1000 });
    await deleteRatingById(rating.id);
    dispatch(actGetRatings());
  };

  const columns = [
    ...columnsAll.columnRat,
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this category?"
            onConfirm={() => handleDeleteRating(record)}
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

      <div className="container-fluid mt-5">
        <div className="title">
          <h1>Ratings</h1>
        </div>
        {isLoading ? (
          sharinganIcon
        ) : (
          <Table
            columns={columns}
            dataSource={listRatings}
            rowKey="id"
            className="table-style"
          />
        )}
      </div>
    </>
  );
}
