import {
  FETCH_ONE_USER,
  FETCH_ONE_USER_STARTED,
  FETCH_ONE_USER_SUCCESS,
  FETCH_ONE_USER_FAILED,
  FETCH_MANY_USERS,
  FETCH_MANY_USERS_STARTED,
  FETCH_MANY_USERS_SUCCESS,
  FETCH_MANY_USERS_FAILED,
  SHOW_USER,
  SHOW_USER_STARTED,
  SHOW_USER_SUCCESS,
  SHOW_USER_FAILED,
  CREATE_USER,
  CREATE_USER_STARTED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  UPDATE_USER,
  UPDATE_USER_STARTED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  DELETE_USER,
  DELETE_USER_STARTED,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "./actions";

// FETCH_ONE_USER
export const fetchOneUser = (payload) => ({
  type: FETCH_ONE_USER,
  payload,
});

export const fetchOneUserStarted = (payload) => ({
  type: FETCH_ONE_USER_STARTED,
  payload,
});

export const fetchOneUserSuccess = (payload) => ({
  type: FETCH_ONE_USER_SUCCESS,
  payload,
});

export const fetchOneUserFailed = (payload) => ({
  type: FETCH_ONE_USER_FAILED,
  payload,
});

// FETCH_MANY_USERS
export const fetchManyUsers = (payload) => ({
  type: FETCH_MANY_USERS,
  payload,
});

export const fetchManyUsersStarted = (payload) => ({
  type: FETCH_MANY_USERS_STARTED,
  payload,
});

export const fetchManyUsersSuccess = (payload) => ({
  type: FETCH_MANY_USERS_SUCCESS,
  payload,
});

export const fetchManyUsersFailed = (payload) => ({
  type: FETCH_MANY_USERS_FAILED,
  payload,
});

// SHOW_USER
export const showUser = (payload) => ({
  type: SHOW_USER,
  payload,
});

export const showUserStarted = (payload) => ({
  type: SHOW_USER_STARTED,
  payload,
});

export const showUserSuccess = (payload) => ({
  type: SHOW_USER_SUCCESS,
  payload,
});

export const showUserFailed = (payload) => ({
  type: SHOW_USER_FAILED,
  payload,
});

// CREATE_USER
export const createUser = (payload) => ({
  type: CREATE_USER,
  payload,
});

export const createUserStarted = (payload) => ({
  type: CREATE_USER_STARTED,
  payload,
});

export const createUserSuccess = (payload) => ({
  type: CREATE_USER_SUCCESS,
  payload,
});

export const createUserFailed = (payload) => ({
  type: CREATE_USER_FAILED,
  payload,
});

// UPDATE_USER
export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});

export const updateUserStarted = (payload) => ({
  type: UPDATE_USER_STARTED,
  payload,
});

export const updateUserSuccess = (payload) => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});

export const updateUserFailed = (payload) => ({
  type: UPDATE_USER_FAILED,
  payload,
});

// DELETE_USER
export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

export const deleteUserStarted = (payload) => ({
  type: DELETE_USER_STARTED,
  payload,
});

export const deleteUserSuccess = (payload) => ({
  type: DELETE_USER_SUCCESS,
  payload,
});

export const deleteUserFailed = (payload) => ({
  type: DELETE_USER_FAILED,
  payload,
});
