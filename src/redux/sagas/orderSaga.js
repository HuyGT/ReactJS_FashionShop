import { call, put, takeLeading } from "redux-saga/effects";
import { addOrder, getOrderById, getOrders } from "../../apis/orderApi";
import { OrderTypes } from "../../common/types";
import {
  actSetLoadingOrder,
  actAddOrder,
  actGetOrderByProfile,
} from "../actions/orderAction";
function* fetchOrders(action) {
  yield put(actSetLoadingOrder());
  try {
    const orders = yield call(getOrders);
    yield put({
      type: OrderTypes.GET_ORDER_SUCCESS,
      payload: orders,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* fetchOrderByFilter(action) {
  yield put(actSetLoadingOrder());
  try {
    const orders = yield call(getOrders, { ...action.payload });
    yield put({ type: OrderTypes.GET_ORDER_SUCCESS, payload: orders });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* fetchOrderById(action) {
  yield put(actSetLoadingOrder());
  try {
    const order = yield call(getOrderById, action.payload);
    yield put({
      type: OrderTypes.GET_ORDER_BY_ID_SUCCESS,
      payload: order,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchaddOrder(action) {
  yield put(actSetLoadingOrder());
  const data = action.payload;
  try {
    const response = yield call(addOrder, data);
    yield put(actAddOrder(response));
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchOrderByEmail(action) {
  yield put(actSetLoadingOrder());
  const email = action.payload.email;
  const password = action.payload.password;

  try {
    const orders = yield call(getOrders);
    const listOrderUser = orders.filter(
      (item) => item.email === email && item.password === password
    );
    const data = listOrderUser.map((item) => {
      console.log(item);
      return item.cart;
    });
    console.log(data, "data");
    yield put(actGetOrderByProfile(listOrderUser));
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAddOrder() {
  yield takeLeading(OrderTypes.ADD_ORDER, fetchaddOrder);
}

function* watchAllOrder() {
  yield takeLeading(OrderTypes.GET_All_ORDER, fetchOrders);
}
function* watchOrderByFilter() {
  yield takeLeading(OrderTypes.GET_ORDER_BY_FILTER, fetchOrderByFilter);
}
function* watchDetailOrder() {
  yield takeLeading(OrderTypes.GET_ORDER_BY_ID, fetchOrderById);
}

function* watchDetailUserOrder() {
  yield takeLeading(OrderTypes.GET_ORDER_BY_PROFILE, fetchOrderByEmail);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  watchAllOrder(),
  watchDetailOrder(),
  watchAddOrder(),
  watchDetailUserOrder(),
  watchOrderByFilter(),
];
