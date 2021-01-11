import axios from "axios";
// improt
import queryString from "query-string";
// TODO: Permitir query string

const baseURL = "http://localhost:3001";

const api = axios.create({
  baseURL,
  paramsSerializer: (params) => queryString.stringify(params),
});

export const fetchMany = async (path, query = {}, axiosConfig = {}) =>
  await api
    .get(path, { ...axiosConfig, params: query })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
export const fetchOneById = async (path, id, query, axiosConfig = {}) =>
  await api
    .get(`${path}/${id}`, { ...axiosConfig, params: query })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
export const create = async (path, data, query = {}, axiosConfig = {}) =>
  await api
    .post(path, data, query)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
export const update = async (path, data, query = {}, axiosConfig = {}) =>
  await api
    .put(`${path}/${data.id}`, data, query)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
export const destroy = async (path, query = {}, axiosConfig = {}) =>
  await api
    .delete(path, query)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
export const destroyOneById = async (path, id, axiosConfig = {}) =>
  await api
    .delete(`${path}/${id}`, axiosConfig)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
