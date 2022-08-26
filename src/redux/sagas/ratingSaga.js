/* eslint-disable import/no-anonymous-default-export */
import { call, put, takeLeading } from "redux-saga/effects";
import { getRatings, getRatingsByPage } from "../../apis/ratingApi";
import { RatingTypes } from "../../common/types";
import {
  actGetRatingByPage,
  actSetLastRating,
  actSetLoading,
} from "../actions/ratingAction";

function* fetchRatings(action) {
  yield put(actSetLoading());
  try {
    const ratings = yield call(getRatings);
    yield put({ type: RatingTypes.GET_RATING_SUCCESS, payload: ratings });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchRatingByFilter(action) {
  yield put(actSetLoading());
  try {
    const ratings = yield call(getRatings, { ...action.payload });
    yield put({ type: RatingTypes.GET_RATING_SUCCESS, payload: ratings });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* fetchRatingByPage(action) {
  yield put(actSetLoading());
  const page = action.payload.page;
  const limit = action.payload.limit;
  try {
    const ratings = yield call(getRatingsByPage, page, limit);
    const ratingsAll = yield call(getRatings);

    if (ratings.length === ratingsAll.length) {
      yield put(actSetLastRating(ratingsAll));
      return;
    }

    yield put(actGetRatingByPage(ratings));
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAllRating() {
  yield takeLeading(RatingTypes.GET_RATINGS, fetchRatings);
}
function* watchAllRatingByFilter() {
  yield takeLeading(RatingTypes.GET_RATING_BY_FILTER, fetchRatingByFilter);
}

function* watchAllRatingByPage() {
  yield takeLeading(RatingTypes.GET_RATING_BY_PAGE, fetchRatingByPage);
}

export default [
  watchAllRatingByFilter(),
  watchAllRatingByPage(),
  watchAllRating(),
];
