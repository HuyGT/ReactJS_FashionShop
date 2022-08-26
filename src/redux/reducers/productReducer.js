import { ProductTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listProducts: [],
  product: {},
};

const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ProductTypes.GET_PRODUCT_SUCCESS: {
      return { ...state, listProducts: action.payload, isLoading: false };
    }
    case ProductTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }
    case ProductTypes.GET_PRODUCT_BY_GENDER: {
      return { ...state, listProducts: action.gender, isLoading: false };
    }
    case ProductTypes.GET_PRODUCT_BY_ID: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ProductTypes.GET_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...state,
        product: action.productDetail,
        isLoading: false,
      };
    }
    case ProductTypes.GET_PRODUCT_BY_PAGE: {
      return {
        ...state,
        isLoading: false,
        listProducts: action.payload,
      };
    }
    case ProductTypes.GET_PRODUCT_BY_NAME: {
      return {
        ...state,
        isLoading: false,
        listProducts: action.payload,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
