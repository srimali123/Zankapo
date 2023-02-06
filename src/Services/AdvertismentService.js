import { Config } from "../Config";
import * as httpClient from "./HttpClient";

export const createAdvertisment = async (data) => {
  const url = `${Config.API_BASE_URL}api/product/store`;
  return await httpClient._post(url, data);
};

export const createPropertyAdvertisment = async (data) => {
  const url = `${Config.API_BASE_URL}api/property/store`;
  return await httpClient._post(url, data);
};

export const fetchAdvertisments = async () => {
  const url = `${Config.API_BASE_URL}api/product/showAll`;
  const response = await httpClient.get(url);
  return response;
};

export const fetchProperty = async () => {
  const url = `${Config.API_BASE_URL}api/property/showAll`;
  const response = await httpClient.get(url);
  return response;
};

export const fetchAdvertismentsById = async (id) => {
  const url = `${Config.API_BASE_URL}api/product/search/${id}`;
  const response = await httpClient.get(url);
  return response;
};

export const fetchPropertiesById = async (id) => {
  const url = `${Config.API_BASE_URL}api/property/search/${id}`;
  const response = await httpClient.get(url);
  return response;
};

export const fetchCategory = async () => {
  const url = `${Config.API_BASE_URL}api/category/list`;
  const response = await httpClient.get(url);
  return response;
};

export const fetchProductByCategory = async (id) => {
  const url = `${Config.API_BASE_URL}api/product/searchbycat/${id}`;
  const response = await httpClient.get(url);
  return response;
};
