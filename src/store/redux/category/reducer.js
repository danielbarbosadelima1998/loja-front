import {
  FETCH_ONE_CATEGORY,
  FETCH_ONE_CATEGORY_STARTED,
  FETCH_ONE_CATEGORY_SUCCESS,
  FETCH_ONE_CATEGORY_FAILED,
  FETCH_MANY_CATEGORIES,
  FETCH_MANY_CATEGORIES_STARTED,
  FETCH_MANY_CATEGORIES_SUCCESS,
  FETCH_MANY_CATEGORIES_FAILED,
  CREATE_CATEGORY,
  CREATE_CATEGORY_STARTED,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_STARTED,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
  DELETE_CATEGORY,
  DELETE_CATEGORY_STARTED,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
} from "./actions";

const initialState = {
  data: [],
  id: "",
  currentData: {},
  isLoading: false,
  error: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_ONE_CATEGORY
    case FETCH_ONE_CATEGORY:
      return state;
    case FETCH_ONE_CATEGORY_STARTED:
      return { ...state, isLoading: true, error: false };
    case FETCH_ONE_CATEGORY_SUCCESS: {
      return {
        ...state,
        currentData: action.payload,
        isLoading: false,
        error: false,
      };
    }
    case FETCH_ONE_CATEGORY_FAILED:
      return { ...state, isLoading: false, error: true };

    // FETCH_MANY_CATEGORIES
    case FETCH_MANY_CATEGORIES:
      return state;
    case FETCH_MANY_CATEGORIES_STARTED:
      return { ...state, isLoading: true, error: false };
    case FETCH_MANY_CATEGORIES_SUCCESS:
      return {
        ...action.payload,
        isLoading: false,
        error: false,
      };
    case FETCH_MANY_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: true };

    // CREATE_CATEGORY
    case CREATE_CATEGORY:
      return state;
    case CREATE_CATEGORY_STARTED:
      return { ...state, isLoading: true, error: false };
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        data: [...state.data, { ...action.payload.data }],
        isLoading: false,
        error: false,
      };
    case CREATE_CATEGORY_FAILED:
      return { ...state, isLoading: false, error: true };

    //UPDATE_CATEGORY
    case UPDATE_CATEGORY:
      return state;
    case UPDATE_CATEGORY_STARTED:
      return { ...state, isLoading: true, error: false };
    case UPDATE_CATEGORY_SUCCESS: {
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
        currentData: action.payload.data,
        isLoading: false,
        error: false,
      };
    }
    case UPDATE_CATEGORY_FAILED:
      return { ...state, isLoading: false, error: true };

    //DESTROY_CATEGORY
    case DELETE_CATEGORY:
      return state;
    case DELETE_CATEGORY_STARTED:
      return { ...state, isLoading: true, error: false };
    case DELETE_CATEGORY_SUCCESS:
      const index = state.data.findIndex((i) => i.id === action.payload.id);
      return {
        ...state,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
        isLoading: false,
        error: false,
      };
    case DELETE_CATEGORY_FAILED:
      return { ...state, isLoading: false, error: true };

    //DEFAULT
    default:
      return state;
  }
};

export default categoryReducer;
