import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import {
  getProducts,
  getProductsById,
  getProductsByPage,
} from "../../apis/productApi";
import { ProductTypes } from "../../common/types";
import {
  actGetProductByName,
  actGetProductByPage,
  actSetLoadingProduct,
} from "../actions/productAction";
function* fetchProducts(action) {
  yield put(actSetLoadingProduct());

  try {
    const products = yield call(getProducts,{ _sort: "dateAdd", _order: "desc" });
    yield put({ type: ProductTypes.GET_PRODUCT_SUCCESS, payload: products });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* fetchProductsByFilter(action) {
  yield put(actSetLoadingProduct());
  try {
    const products = yield call(getProducts, { ...action.payload });
    yield put({ type: ProductTypes.GET_PRODUCT_SUCCESS, payload: products });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchProductsByGender(action) {
  yield put(actSetLoadingProduct());
  try {
    const products = yield call(getProducts);

    const gender = products.filter((item) =>
      item.gender.includes(action.payload)
    );

    yield put({ type: ProductTypes.GET_PRODUCT_BY_GENDER, gender });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchProductsByName(action) {
  yield put(actSetLoadingProduct());
  try {
    const valueSearch = action.payload;
    const products = yield call(getProducts);
    const data = products.filter((item) =>
      item.productName.toLowerCase().includes(valueSearch)
    );
    yield put(actGetProductByName(data));
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchProductsByPage(action) {
  yield put(actSetLoadingProduct());

  const page = action.payload.page;
  const limit = action.payload.limit;
  const gender = action.payload.gender;

  try {
    const data = yield call(getProductsByPage, page, limit);
    if (gender) {
      const dataGender = data.filter((item) => item.gender.includes(gender));

      yield put(actGetProductByPage(dataGender));
    } else {
      yield put(actGetProductByPage(data));
    }
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchProductsById(action) {
  yield put(actSetLoadingProduct());
  try {
    const id = action.payload;
    const productDetail = yield call(getProductsById, id);
    yield put({ type: ProductTypes.GET_PRODUCT_BY_ID_SUCCESS, productDetail });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAllProductByPage() {
  yield takeLeading(ProductTypes.GET_PRODUCT_BY_PAGE, fetchProductsByPage);
}

function* watchAllProduct() {
  yield takeLeading(ProductTypes.GET_All_PRODUCT, fetchProducts);
}
function* watchAllProductByFilter() {
  yield takeLeading(ProductTypes.GET_PRODUCT_BY_FILTER, fetchProductsByFilter);
}
function* watchAllProductsByGender() {
  yield takeLeading(ProductTypes.GET_PRODUCT_BY_GENDER, fetchProductsByGender);
}
function* watchAllProductById() {
  yield takeLatest(ProductTypes.GET_PRODUCT_BY_ID, fetchProductsById);
}

function* watchAllProductByName() {
  yield takeLeading(ProductTypes.GET_PRODUCT_BY_NAME, fetchProductsByName);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  watchAllProduct(),
  watchAllProductByFilter(),
  watchAllProductsByGender(),
  watchAllProductById(),
  watchAllProductByPage(),
  watchAllProductByName(),
];
