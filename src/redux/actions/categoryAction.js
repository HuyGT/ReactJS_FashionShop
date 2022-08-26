import { CategoryTypes } from "../../common/types";

export const actGetAllCategory = () => ({
  type: CategoryTypes.GET_All_CATEGORY,
});

export const actGetCategorySuccess = (payload) => ({
  type: CategoryTypes.GET_CATEGORY_SUCCESS,
  payload: payload,
});

export const actSetLoading = () => ({
  type: CategoryTypes.SET_LOADING,
});
