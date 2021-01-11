import {
  FETCH_ONE_PRODUCT,
  FETCH_ONE_PRODUCT_STARTED,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_FAILED,
  FETCH_MANY_PRODUCTS,
  FETCH_MANY_PRODUCTS_STARTED,
  FETCH_MANY_PRODUCTS_SUCCESS,
  FETCH_MANY_PRODUCTS_FAILED,
  CREATE_PRODUCT,
  CREATE_PRODUCT_STARTED,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_STARTED,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_STARTED,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_ONE_PRODUCT
    case FETCH_ONE_PRODUCT:
      return state;
    case FETCH_ONE_PRODUCT_STARTED:
      return { ...state, isLoading: true, error: false };
    case FETCH_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        currentData: action.payload,
        isLoading: false,
        error: false,
      };
    case FETCH_ONE_PRODUCT_FAILED:
      return { ...state, isLoading: false, error: true };

    // FETCH_MANY_PRODUCTS
    case FETCH_MANY_PRODUCTS:
      return state;
    case FETCH_MANY_PRODUCTS_STARTED:
      return { ...state, isLoading: true, error: false };
    case FETCH_MANY_PRODUCTS_SUCCESS:
      return {
        ...action.payload,
        isLoading: false,
        error: false,
      };
    case FETCH_MANY_PRODUCTS_FAILED:
      return { ...state, isLoading: false, error: true };

    // CREATE_PRODUCT
    case CREATE_PRODUCT:
      return { ...state, ...action.payload };
    case CREATE_PRODUCT_STARTED:
      return { ...state, isLoading: true, error: false };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: [...state.data, { ...action.payload.data }],
        isLoading: false,
        error: false,
      };
    case CREATE_PRODUCT_FAILED:
      return { ...state, isLoading: false, error: true };

    //UPDATE_PRODUCT
    case UPDATE_PRODUCT:
      return { ...state, ...action.payload };
    case UPDATE_PRODUCT_STARTED:
      return { ...state, isLoading: true, error: false };
    case UPDATE_PRODUCT_SUCCESS:
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
    case UPDATE_PRODUCT_FAILED:
      return { ...state, isLoading: false, error: true };

    //DESTROY_PRODUCT
    case DELETE_PRODUCT:
      return { ...state };
    case DELETE_PRODUCT_STARTED:
      return { ...state, isLoading: true, error: false };
    case DELETE_PRODUCT_SUCCESS:
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
    case DELETE_PRODUCT_FAILED:
      return { ...state, isLoading: false, error: true };

    //DEFAULT
    default:
      return state;
  }
};

export default productReducer;
