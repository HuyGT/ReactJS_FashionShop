import { ProductTypes } from "../../common/types";

export const actGetAllProduct = () => ({
  type: ProductTypes.GET_All_PRODUCT,
});
export const actGetProductByFilter = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_FILTER,
  payload: payload,
});

export const actGetProductByPage = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_PAGE,
  payload,
});
export const actGetProductByName = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_NAME,
  payload,
});

export const actGetProductById = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_ID,
  payload: payload,
});
export const actGetProductByIdSuccess = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_ID_SUCCESS,
  payload: payload,
});

export const actGetProductByGender = (payload) => {
  return {
    type: ProductTypes.GET_PRODUCT_BY_GENDER,
    payload: payload,
  };
};

export const actGetProductSuccess = (payload) => ({
  type: ProductTypes.GET_PRODUCT_SUCCESS,
  payload: payload,
});

export const actSetLoadingProduct = () => {
  return {
    type: ProductTypes.SET_LOADING,
  };
};
