import { put, call, all, takeLatest } from "redux-saga/effects";
import {
  fetchOneProductStarted,
  fetchOneProductSuccess,
  fetchOneProductFailed,
  fetchManyProductsStarted,
  fetchManyProductsSuccess,
  fetchManyProductsFailed,
  createProductStarted,
  createProductSuccess,
  createProductFailed,
  updateProductStarted,
  updateProductSuccess,
  updateProductFailed,
  deleteProductStarted,
  deleteProductSuccess,
  deleteProductFailed,
} from "./actionCreators";
import {
  CREATE_PRODUCT,
  FETCH_MANY_PRODUCTS,
  FETCH_ONE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./actions";
import {
  create,
  update,
  fetchOneById,
  fetchMany,
  destroyOneById,
} from "../../../axios";

function* fetchOneProductById({ payload }) {
  const { id, query } = payload;
  try {
    yield put(fetchOneProductStarted());

    const product = yield call(fetchOneById, "/products", id, query);

    yield put(fetchOneProductSuccess(product.data));
  } catch (e) {
    yield put(fetchOneProductFailed(payload));
  }
}

function* fetchManyProducts({ payload }) {
  try {
    yield put(fetchManyProductsStarted());

    const products = yield call(fetchMany, "/products", payload);

    yield put(fetchManyProductsSuccess(products));
  } catch (e) {
    yield put(fetchManyProductsFailed());
  }
}

function* createProduct({ payload }) {
  try {
    yield put(createProductStarted(payload));

    const product = yield call(create, "/products", payload);

    yield put(createProductSuccess(product));
  } catch (e) {
    yield put(createProductFailed(payload));
  }
}

function* updateProduct({ payload }) {
  try {
    yield put(updateProductStarted(payload));

    const product = yield call(update, "/products", payload);
    yield put(updateProductSuccess(product));
  } catch (e) {
    yield put(updateProductFailed(payload));
  }
}

function* deleteProductById({ payload }) {
  try {
    yield put(deleteProductStarted(payload));

    const product = yield call(destroyOneById, "/products", payload);
    yield put(deleteProductSuccess(product));
  } catch (e) {
    yield put(deleteProductFailed(payload));
  }
}

function* watcherProduct() {
  yield all([takeLatest(FETCH_MANY_PRODUCTS, fetchManyProducts)]);
  yield all([takeLatest(CREATE_PRODUCT, createProduct)]);
  yield all([takeLatest(UPDATE_PRODUCT, updateProduct)]);
  yield all([takeLatest(FETCH_ONE_PRODUCT, fetchOneProductById)]);
  yield all([takeLatest(DELETE_PRODUCT, deleteProductById)]);
}

export default watcherProduct;
