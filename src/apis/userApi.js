import axiosClient from "../untils/axiosClient";

// export const register = async (action) => {
//   const { data } = await axiosClient.post("users", {
//     action,
//   });
//   return data;
// };

// export const login = async (action) => {
//   const { data } = await axiosClient.post("login", {
//     action,
//   });
//   return data;
// };

export const getUsers = async () => {
  const { data } = await axiosClient.get("users");
  return data;
};
export const getUserById = async (id) => {
  const { data } = await axiosClient.get(`users/${id}`);
  return data;
};
export const deleteUserById = (id) => {
  return axiosClient.delete(`users/${id}`);
};
export const addUser = (user) => {
  return axiosClient.post(`users`, { ...user });
};
export const editUser = (user, id) => {
  return axiosClient.put(`users/${id}`, { ...user });
};
