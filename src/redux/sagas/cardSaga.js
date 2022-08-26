import { put, takeLatest } from "redux-saga/effects";
import { ProductTypes } from "../../common/types";
import { actSetLoading } from "../actions/card/cardAction";

function* fetchCheckOutCard(action) {
  yield put(actSetLoading());
  try {
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAllCheckOutCard() {
  yield takeLatest(ProductTypes.CHECK_OUT, fetchCheckOutCard);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAllCheckOutCard()];
