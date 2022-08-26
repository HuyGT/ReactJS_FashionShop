import React from "react";
import { Pie } from "@ant-design/plots";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Status } from "../../../common/types";

export default function PieChart() {
  const { listOrder } = useSelector((state) => state?.orderReducer);

  const statusOder = _.groupBy(listOrder, "status");
  const data = [
    { type: Status.PROCESSING, value: statusOder.PROCESSING?.length },
    { type: Status.CANCELED, value: statusOder.CANCELED?.length },
    { type: Status.DELIVERED, value: statusOder.DELIVERED?.length },
    { type: Status.SHIPPING, value: statusOder.SHIPPING?.length },
  ];

  const configPie = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
    },
  };
  return <Pie {...configPie} style={{ height: "330px" }} />;
}
