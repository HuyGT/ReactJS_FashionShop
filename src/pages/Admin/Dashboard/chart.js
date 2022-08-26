import { Column } from "@ant-design/charts";
import React from "react";
import { useSelector } from "react-redux";

export default function Chart() {
  const { listOrder } = useSelector((state) => state?.orderReducer);

  let revenueQ1 = 0;
  let revenueQ2 = 0;
  let revenueQ3 = 0;
  let revenueQ4 = 0;

  listOrder.forEach((order) => {
    let monthOrder = new Date(order.dateAdd).getMonth() + 1;
    if (monthOrder > 0 && monthOrder <= 3) {
      revenueQ1 += order.total;
    } else if (monthOrder > 3 && monthOrder <= 6) {
      revenueQ2 += order.total;
    } else if (monthOrder > 6 && monthOrder <= 9) {
      revenueQ3 += order.total;
    } else if (monthOrder > 9 && monthOrder <= 12) {
      revenueQ4 += order.total;
    }
  });
  const data = [
    {
      type: "Qúy 1",
      value: revenueQ1,
    },
    {
      type: "Quý 2",
      value: revenueQ2,
    },
    {
      type: "Quý 3",
      value: revenueQ3,
    },
    {
      type: "Quý 4",
      value: revenueQ4,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "",

    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
}
