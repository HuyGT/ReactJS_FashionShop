import { call, put, takeLeading } from "redux-saga/effects";
import { getCategories } from "../../apis/categoryApi";
import { CategoryTypes } from "../../common/types";
import { actSetLoading } from "../actions/categoryAction";
function* fetchCategories(action) {
  yield put(actSetLoading());
  try {
    const categories = yield call(getCategories);
    yield put({
      type: CategoryTypes.GET_CATEGORY_SUCCESS,
      payload: categories,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* watchAllCategory() {
  yield takeLeading(CategoryTypes.GET_All_CATEGORY, fetchCategories);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAllCategory()];
