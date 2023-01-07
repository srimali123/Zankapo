import { Config } from "../Config";
import * as httpClient from "./HttpClient";

export const createAdvertisment = async (data) => {
  const url = `${Config.API_BASE_URL}api/add/store`;
  return await httpClient._post(url, data);
};

export const createPropertyAdvertisment = async (data) => {
  const url = `${Config.API_BASE_URL}api/property/create`;
  return await httpClient._post(url, data);
};

export const fetchAdvertisments = async () => {
  const url = `${Config.API_BASE_URL}api/add/show`;
  const response = await httpClient.get(url);
  return response;
};

export const fetchProperty = async () => {
  const url = `${Config.API_BASE_URL}api/property/list`;
  const response = await httpClient.get(url);
  return response;
};
