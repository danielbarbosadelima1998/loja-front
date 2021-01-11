import {
  FETCH_ONE_CATEGORY,
  FETCH_ONE_CATEGORY_STARTED,
  FETCH_ONE_CATEGORY_SUCCESS,
  FETCH_ONE_CATEGORY_FAILED,
  FETCH_MANY_CATEGORIES,
  FETCH_MANY_CATEGORIES_STARTED,
  FETCH_MANY_CATEGORIES_SUCCESS,
  FETCH_MANY_CATEGORIES_FAILED,
  SHOW_CATEGORY,
  SHOW_CATEGORY_STARTED,
  SHOW_CATEGORY_SUCCESS,
  SHOW_CATEGORY_FAILED,
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

// FETCH_ONE_CATEGORIES
export const fetchOneCategory = (payload) => ({
  type: FETCH_ONE_CATEGORY,
  payload,
});

export const fetchOneCategoryStarted = (payload) => ({
  type: FETCH_ONE_CATEGORY_STARTED,
  payload,
});

export const fetchOneCategorySuccess = (payload) => ({
  type: FETCH_ONE_CATEGORY_SUCCESS,
  payload,
});

export const fetchOneCategoryFailed = (payload) => ({
  type: FETCH_ONE_CATEGORY_FAILED,
  payload,
});

// FETCH_MANY_CATEGORIES
export const fetchManyCategories = (payload) => ({
  type: FETCH_MANY_CATEGORIES,
  payload,
});

export const fetchManyCategoriesStarted = (payload) => ({
  type: FETCH_MANY_CATEGORIES_STARTED,
  payload,
});

export const fetchManyCategoriesSuccess = (payload) => ({
  type: FETCH_MANY_CATEGORIES_SUCCESS,
  payload,
});

export const fetchManyCategoriesFailed = (payload) => ({
  type: FETCH_MANY_CATEGORIES_FAILED,
  payload,
});

// SHOW_CATEGORY
export const showCategory = (payload) => ({
  type: SHOW_CATEGORY,
  payload,
});

export const showCategoryStarted = (payload) => ({
  type: SHOW_CATEGORY_STARTED,
  payload,
});

export const showCategorySuccess = (payload) => ({
  type: SHOW_CATEGORY_SUCCESS,
  payload,
});

export const showCategoryFailed = (payload) => ({
  type: SHOW_CATEGORY_FAILED,
  payload,
});

// CREATE_CATEGORY
export const createCategory = (payload) => ({
  type: CREATE_CATEGORY,
  payload,
});

export const createCategoryStarted = (payload) => ({
  type: CREATE_CATEGORY_STARTED,
  payload,
});

export const createCategorySuccess = (payload) => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload,
});

export const createCategoryFailed = (payload) => ({
  type: CREATE_CATEGORY_FAILED,
  payload,
});

// UPDATE_CATEGORY
export const updateCategory = (payload) => ({
  type: UPDATE_CATEGORY,
  payload,
});

export const updateCategoryStarted = (payload) => ({
  type: UPDATE_CATEGORY_STARTED,
  payload,
});

export const updateCategorySuccess = (payload) => ({
  type: UPDATE_CATEGORY_SUCCESS,
  payload,
});

export const updateCategoryFailed = (payload) => ({
  type: UPDATE_CATEGORY_FAILED,
  payload,
});

// DELETE_CATEGORY
export const deleteCategory = (payload) => ({
  type: DELETE_CATEGORY,
  payload,
});

export const deleteCategoryStarted = (payload) => ({
  type: DELETE_CATEGORY_STARTED,
  payload,
});

export const deleteCategorySuccess = (payload) => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload,
});

export const deleteCategoryFailed = (payload) => ({
  type: DELETE_CATEGORY_FAILED,
  payload,
});
