import { CategoryTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listCategory: [],
};

const categoryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CategoryTypes.GET_CATEGORY_SUCCESS: {
      return { ...state, listCategory: action.payload, isLoading: false };
    }
    case CategoryTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default categoryReducer;