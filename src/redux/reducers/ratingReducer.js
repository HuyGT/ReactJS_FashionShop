import { RatingTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listRatings: [],
  lastData: false,
};

const ratingReducer = (state = initialValue, action) => {
  switch (action.type) {
    case RatingTypes.GET_RATING_SUCCESS: {
      const data = action.payload.reverse();
      return { ...state, listRatings: data, isLoading: false };
    }
    case RatingTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }
    case RatingTypes.GET_RATING_BY_PAGE: {
      const data = Array.isArray(action.payload)
        ? action.payload.reverse()
        : [];
      return {
        ...state,
        isLoading: false,
        listRatings: data,
      };
    }
    case RatingTypes.LAST_DATA_RATING: {
      const data = Array.isArray(action.payload)
        ? action.payload.reverse()
        : [];
      return {
        ...state,
        isLoading: false,
        lastData: true,
        listRatings: data,
      };
    }

    default:
      return state;
  }
};

export default ratingReducer;
