import axiosClient from "../untils/axiosClient";

export const getProducts = async (params) => {
  const { data } = await axiosClient.get("products", {
    params: params,
  });
  return data;
};

export const getProductsByPage = async (page, limit) => {
  const { data } = await axiosClient.get(
    `products?_page=${page}&_limit=${limit}`
  );
  return data;
};

export const getProductsById = async (id) => {
  const { data } = await axiosClient.get(`products/${id}`);
  return data;
};

export const deleteProductById = (id) => {
  return axiosClient.delete(`products/${id}`);
};
export const addProduct = (product) => {
  return axiosClient.post(`products`, { ...product });
};
export const editProduct = (product, id) => {
  return axiosClient.put(`products/${id}`, { ...product });
};
