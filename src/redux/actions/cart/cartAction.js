import { CartType } from "../../../common/types";

export const actAddCart = (payload) => ({
  type: CartType.ADD_TO_CART,
  payload,
});

export const actRemoveAllCart = () => ({
  type: CartType.REMOVE_ALL_CART,
});
export const actRemoveToCart = (payload) => ({
  type: CartType.REMOVE_TO_CART,
  payload,
});

export const actChangeWishList = (payload) => ({
  type: CartType.CHANGE_WISH_LIST,
  payload,
});

export const actChangeQuantityCart = (payload) => ({
  type: CartType.CHANGE_QUANTITY_CART,
  payload,
});

export const actGetAllCart = () => ({
  type: CartType.GET_ALL_CART,
});

export const actSLoading = () => ({
  type: CartType.SET_LOADING,
});
