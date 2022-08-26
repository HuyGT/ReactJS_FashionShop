import axiosClient from "../untils/axiosClient";

export const logIn = async (action) => {
  const { data } = await axiosClient.post("users", {
    action,
  });
  return data;
};

export const getUser = async (action) => {
  const { data } = await axiosClient.get("users");
  return data;
};

export const editUser = (user, id) => {
  return axiosClient.put(`users/${id}`, { ...user });
};
