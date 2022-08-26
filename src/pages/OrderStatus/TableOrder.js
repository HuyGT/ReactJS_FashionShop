import { Table } from "antd";
import React from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import { columnsAll } from "../../common/table";
import BtnView from "../../components/Button/BtnView"
const TableOrder = ({ listOrder }) => {
  const history = useHistory()
  const handleRedirectOrder = (order) => {
    history.push(
      generatePath(ROUTER_PATH.DETAIL_ORDER_USER.path, {
        id: order.id,
      })
    );
  };
  const columns = [
    ...columnsAll.columnOrder,
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
          <button
            className="btn btn-primary"
            onClick={() => handleRedirectOrder(record)}
          >
            <BtnView />
          </button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={Array.isArray(listOrder) && listOrder.length > 0 && listOrder}
      rowKey="id"
      className="table-style table-order"
      pagination={true}
    ></Table>
  );
};

export default TableOrder;
