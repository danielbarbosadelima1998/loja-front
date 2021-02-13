import { put, call, all, takeLatest } from "redux-saga/effects";
import {
  fetchOneUserStarted,
  fetchOneUserSuccess,
  fetchOneUserFailed,
  fetchManyUsersStarted,
  fetchManyUsersSuccess,
  fetchManyUsersFailed,
  createUserStarted,
  createUserSuccess,
  createUserFailed,
  updateUserStarted,
  updateUserSuccess,
  updateUserFailed,
  deleteUserStarted,
  deleteUserSuccess,
  deleteUserFailed,
} from "./actionCreators";
import {
  CREATE_USER,
  FETCH_MANY_USERS,
  FETCH_ONE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "./actions";
import { create, fetchMany, fetchOneById, update, destroyOneById } from "../../../axios";


function* fetchOneUserById({ payload }) {
  const { id, query } = payload;
  try {
    yield put(fetchOneUserStarted());

    const user = yield call(fetchOneById, "/users", id, query);

    yield put(fetchOneUserSuccess(user.data));
  } catch (e) {
    yield put(fetchOneUserFailed(payload));
  }
}


function* fetchManyUsers(action) {
  try {
    yield put(fetchManyUsersStarted());

    const users = yield call(fetchMany, "/users", action.payload);

    yield put(fetchManyUsersSuccess(users));
  } catch (e) {
    yield put(fetchManyUsersFailed());
  }
}

function* createUser({ payload }) {
  try {
    yield put(createUserStarted(payload));

    const user = yield call(create, "/users", payload);

    yield put(createUserSuccess(user));
  } catch (e) {
    yield put(createUserFailed(payload));
  }
}

function* updateUser({ payload }) {
  try {
    yield put(updateUserStarted(payload));

    const user = yield call(update, "/users", payload);
    yield put(updateUserSuccess(user));
  } catch (e) {
    yield put(updateUserFailed(payload));
  }
}

function* deleteUserById({ payload }) {
  try {
    yield put(deleteUserStarted(payload));

    const user = yield call(destroyOneById, "/users", payload);
    yield put(deleteUserSuccess(user));
  } catch (e) {
    yield put(deleteUserFailed(payload));
  }
}


function* watcherUser() {
  yield all([takeLatest(CREATE_USER, createUser)]);
  yield all([takeLatest(FETCH_MANY_USERS, fetchManyUsers)]);
  yield all([takeLatest(UPDATE_USER, updateUser)]);
  yield all([takeLatest(FETCH_ONE_USER, fetchOneUserById)]);
  yield all([takeLatest(DELETE_USER, deleteUserById)]);
}

export default watcherUser;
