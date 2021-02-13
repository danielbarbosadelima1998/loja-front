import { put, call, all, takeLatest } from "redux-saga/effects";
import {
  fetchOneCategoryStarted,
  fetchOneCategorySuccess,
  fetchOneCategoryFailed,
  fetchManyCategoriesStarted,
  fetchManyCategoriesSuccess,
  fetchManyCategoriesFailed,
  createCategoryStarted,
  createCategorySuccess,
  createCategoryFailed,
  updateCategoryStarted,
  updateCategorySuccess,
  updateCategoryFailed,
  deleteCategoryStarted,
  deleteCategorySuccess,
  deleteCategoryFailed,
} from "./actionCreators";
import {
  CREATE_CATEGORY,
  FETCH_MANY_CATEGORIES,
  FETCH_ONE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "./actions";
import {
  create,
  update,
  fetchOneById,
  fetchMany,
  destroyOneById,
} from "../../../axios";

function* fetchOneCategoryById({ payload }) {
  try {
    yield put(fetchOneCategoryStarted());

    const category = yield call(fetchOneById, "/categories", payload);

    yield put(fetchOneCategorySuccess(category.data));
  } catch (e) {
    yield put(fetchOneCategoryFailed(payload));
  }
}

function* fetchManyCategories({ payload }) {
  try {
    yield put(fetchManyCategoriesStarted());

    const categories = yield call(fetchMany, "/categories", payload);

    yield put(fetchManyCategoriesSuccess(categories));
  } catch (e) {
    yield put(fetchManyCategoriesFailed());
  }
}

function* createCategory({ payload }) {
  try {
    yield put(createCategoryStarted(payload));

    const category = yield call(create, "/categories", payload);

    yield put(createCategorySuccess(category));
  } catch (e) {
    yield put(createCategoryFailed(payload));
  }
}

function* updateCategory({ payload }) {
  try {
    yield put(updateCategoryStarted(payload));

    const category = yield call(update, "/categories", payload);
    yield put(updateCategorySuccess(category));
  } catch (e) {
    yield put(updateCategoryFailed(payload));
  }
}

function* deleteCategoryById({ payload }) {
  try {
    yield put(deleteCategoryStarted(payload));

    const category = yield call(destroyOneById, "/categories", payload);

    yield put(deleteCategorySuccess(category));
  } catch (e) {
    yield put(deleteCategoryFailed(payload));
  }
}

function* watcherCategory() {
  yield all([takeLatest(FETCH_MANY_CATEGORIES, fetchManyCategories)]);
  yield all([takeLatest(CREATE_CATEGORY, createCategory)]);
  yield all([takeLatest(UPDATE_CATEGORY, updateCategory)]);
  yield all([takeLatest(FETCH_ONE_CATEGORY, fetchOneCategoryById)]);
  yield all([takeLatest(DELETE_CATEGORY, deleteCategoryById)]);
}

export default watcherCategory;
