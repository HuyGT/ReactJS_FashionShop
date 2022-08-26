import { call, put, takeLeading } from "redux-saga/effects";
import { editUser, getUser } from "../../apis/authApi";
import { AuthTypes } from "../../common/types";

import {
  actChangeProfile,
  actLoginFail,
  actLoginSuccess,
  actSetLoadingSuccess,
} from "../actions/auth/authAction";

function* login(action) {
  yield put(actSetLoadingSuccess());
  try {
    const userAll = yield call(getUser);

    const email = action.payload.email;
    const passWord = action.payload.password;

    const account = userAll.filter(
      (item) => item.email === email && item.password === passWord
    );
    console.log(email);
    console.log(passWord);
    console.log(userAll);
    if (account.length > 0) {
      // console.log(1);
      yield put(actLoginSuccess(...account));
    } else {
      // console.log(0);
      yield put(actLoginFail(...account));
    }
  } catch (error) {
    yield put(actLoginFail());
  }
}

function* changeProfile(action) {
  // yield put({ type: AuthTypes.SET_LOADING });
  try {
    const dataUpdata = action.payload;
    const id = dataUpdata.id;
    const response = yield call(editUser, dataUpdata, id);
    yield put(actChangeProfile(response.data));
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchLogin() {
  yield takeLeading(AuthTypes.LOGIN, login);
}
function* watchChangeProfile() {
  yield takeLeading(AuthTypes.CHANGE_PROFILE, changeProfile);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchLogin(), watchChangeProfile()];
