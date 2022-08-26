import axiosClient from "../untils/axiosClient";

export const getOrders = async (params) => {
  const { data } = await axiosClient.get("orders", {
    params: params,
  });
  return data;
};
export const getOrderById = async (id) => {
  const { data } = await axiosClient.get(`orders/${id}`);
  return data;
};
export const deleteOrderById = (id) => {
  return axiosClient.delete(`orders/${id}`);
};
export const addOrder = (order) => {
  return axiosClient.post(`orders`, { ...order });
};
export const editOrder = (order, id) => {
  return axiosClient.put(`orders/${id}`, { ...order });
};
