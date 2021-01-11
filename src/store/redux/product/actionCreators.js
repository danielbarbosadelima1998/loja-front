import {
  FETCH_ONE_PRODUCT,
  FETCH_ONE_PRODUCT_STARTED,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_FAILED,
  FETCH_MANY_PRODUCTS,
  FETCH_MANY_PRODUCTS_STARTED,
  FETCH_MANY_PRODUCTS_SUCCESS,
  FETCH_MANY_PRODUCTS_FAILED,
  SHOW_PRODUCT,
  SHOW_PRODUCT_STARTED,
  SHOW_PRODUCT_SUCCESS,
  SHOW_PRODUCT_FAILED,
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

// FETCH_ONE_PRODUCT
export const fetchOneProduct = (payload) => ({
  type: FETCH_ONE_PRODUCT,
  payload,
});

export const fetchOneProductStarted = (payload) => ({
  type: FETCH_ONE_PRODUCT_STARTED,
  payload,
});

export const fetchOneProductSuccess = (payload) => ({
  type: FETCH_ONE_PRODUCT_SUCCESS,
  payload,
});

export const fetchOneProductFailed = (payload) => ({
  type: FETCH_ONE_PRODUCT_FAILED,
  payload,
});

// FETCH_MANY_PRODUCTS
export const fetchManyProducts = (payload) => ({
  type: FETCH_MANY_PRODUCTS,
  payload,
});

export const fetchManyProductsStarted = (payload) => ({
  type: FETCH_MANY_PRODUCTS_STARTED,
  payload,
});

export const fetchManyProductsSuccess = (payload) => ({
  type: FETCH_MANY_PRODUCTS_SUCCESS,
  payload,
});

export const fetchManyProductsFailed = (payload) => ({
  type: FETCH_MANY_PRODUCTS_FAILED,
  payload,
});

// SHOW_PRODUCT
export const showProduct = (payload) => ({
  type: SHOW_PRODUCT,
  payload,
});

export const showProductStarted = (payload) => ({
  type: SHOW_PRODUCT_STARTED,
  payload,
});

export const showProductSuccess = (payload) => ({
  type: SHOW_PRODUCT_SUCCESS,
  payload,
});

export const showProductFailed = (payload) => ({
  type: SHOW_PRODUCT_FAILED,
  payload,
});

// CREATE_PRODUCT
export const createProduct = (payload) => ({
  type: CREATE_PRODUCT,
  payload,
});

export const createProductStarted = (payload) => ({
  type: CREATE_PRODUCT_STARTED,
  payload,
});

export const createProductSuccess = (payload) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload,
});

export const createProductFailed = (payload) => ({
  type: CREATE_PRODUCT_FAILED,
  payload,
});

// UPDATE_PRODUCT
export const updateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload,
});

export const updateProductStarted = (payload) => ({
  type: UPDATE_PRODUCT_STARTED,
  payload,
});

export const updateProductSuccess = (payload) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload,
});

export const updateProductFailed = (payload) => ({
  type: UPDATE_PRODUCT_FAILED,
  payload,
});

// DELETE_PRODUCT
export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export const deleteProductStarted = (payload) => ({
  type: DELETE_PRODUCT_STARTED,
  payload,
});

export const deleteProductSuccess = (payload) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload,
});

export const deleteProductFailed = (payload) => ({
  type: DELETE_PRODUCT_FAILED,
  payload,
});
