import axiosClient from "../untils/axiosClient";

export const getCategories = async () => {
  const { data } = await axiosClient.get("categories");
  return data;
};

export const deleteCategoryById = (id) => {
	return axiosClient.delete(`categories/${id}`);
};
export const addCategory = (category) => {
	return axiosClient.post(`categories`,{...category});
};
export const editCategory = (category,id) => {
	return axiosClient.put(`categories/${id}`,{...category});
};