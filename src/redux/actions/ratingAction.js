import { RatingTypes } from "../../common/types";

export const actGetRatingByFilter = (payload) => ({
  type: RatingTypes.GET_RATING_BY_FILTER,
  payload: payload,
});
export const actGetRatings = (payload) => ({
  type: RatingTypes.GET_RATINGS,
  payload: payload,
});
export const actGetRatingSuccess = (payload) => ({
  type: RatingTypes.GET_RATING_SUCCESS,
  payload: payload,
});

export const actSetLoading = () => ({
  type: RatingTypes.SET_LOADING,
});
export const actSetLastRating = (payload) => ({
  type: RatingTypes.LAST_DATA_RATING,
  payload,
});

export const actGetRatingByPage = (payload) => ({
  type: RatingTypes.GET_RATING_BY_PAGE,
  payload,
});
