import axiosClient from "../untils/axiosClient";

export const getRatings = async (params) => {
  const { data } = await axiosClient.get("ratings", {
    params: params,
  });
  return data;
};

export const getRatingsByPage = async (page, limit) => {
  const { data } = await axiosClient.get(
    `ratings?_page=${page}&_limit=${limit}`
  );
  return data;
};
export const deleteRatingById = (id) => {
	return axiosClient.delete(`ratings/${id}`);
};
export const addRating = (rating) => {
  return axiosClient.post(`ratings`, { ...rating });
};
