import { put, call, all, takeLatest } from "redux-saga/effects";
import {
  fetchManyUsersStarted,
  fetchManyUsersSuccess,
  fetchManyUsersFailed,
  createUserStarted,
  createUserSuccess,
  createUserFailed,
} from "./actionCreators";
import { CREATE_USER, FETCH_MANY_USERS } from "./actions";
import { create, fetchMany } from "../../../axios";

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

function* watcherUser() {
  yield all([takeLatest(CREATE_USER, createUser)]);
  yield all([takeLatest(FETCH_MANY_USERS, fetchManyUsers)]);
}

export default watcherUser;
