import {
  FETCH_ONE_USER,
  FETCH_ONE_USER_STARTED,
  FETCH_ONE_USER_SUCCESS,
  FETCH_ONE_USER_FAILED,
  FETCH_MANY_USERS,
  FETCH_MANY_USERS_STARTED,
  FETCH_MANY_USERS_SUCCESS,
  FETCH_MANY_USERS_FAILED,
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

const initialState = {
  data: [],
  // user: {
  //   username: "",
  //   email: "",
  //   password: "",
  // },
  login: {
    token: "",
    user: {
      username: "",
      email: "",
      password: "",
    },
  },
  isLoading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_ONE_USER
    case FETCH_ONE_USER:
      return state;
    case FETCH_ONE_USER_STARTED:
      return { ...state, isLoading: true, error: false };
    case FETCH_ONE_USER_SUCCESS:
      return {
        ...state,
        currentData: action.payload,
        isLoading: false,
        error: false,
      };
    case FETCH_ONE_USER_FAILED:
      return { ...state, isLoading: false, error: true };

    // FETCH_MANY_USERS
    case FETCH_MANY_USERS:
      return state;
    case FETCH_MANY_USERS_STARTED:
      return { ...state, isLoading: true, error: false };
    case FETCH_MANY_USERS_SUCCESS:
      return {
        ...action.payload,
        isLoading: false,
        error: false,
      };
    case FETCH_MANY_USERS_FAILED:
      return { ...state, isLoading: false, error: true };

    // CREATE_USER
    case CREATE_USER:
      return state;
    case CREATE_USER_STARTED:
      return { ...state, isLoading: true, error: false };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        data: [...state.data, { ...action.payload.data }],
        isLoading: false,
        error: false,
      };
    case CREATE_USER_FAILED:
      return { ...state, isLoading: false, error: true };

    //UPDATE_USER
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case UPDATE_USER_STARTED:
      return { ...state, isLoading: true, error: false };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data.slice(0, state.data.indexOf(action.payload.data.id)),
          { ...action.payload.data },
          ...state.data.slice(
            0,
            state.data.indexOf(action.payload.data.id) + 1
          ),
        ],
        isLoading: false,
        error: false,
      };
    case UPDATE_USER_FAILED:
      return { ...state, isLoading: false, error: true };

    //DESTROY_USER
    case DELETE_USER:
      return { ...state, ...action.payload };
    case DELETE_USER_STARTED:
      return { ...state, isLoading: true, error: false };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data.slice(0, state.data.indexOf(action.payload.data.id)),
          ...state.data.slice(
            0,
            state.data.indexOf(action.payload.data.id) + 1
          ),
        ],
        isLoading: false,
        error: false,
      };
    case DELETE_USER_FAILED:
      return { ...state, isLoading: false, error: true };

    //DEFAULT
    default:
      return state;
  }
};

export default userReducer;
