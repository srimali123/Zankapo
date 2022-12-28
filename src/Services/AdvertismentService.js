import { Config } from "../Config";
import * as httpClient from "./HttpClient";

export const createAdvertisment = async (data, token) => {
  const url = `${Config.API_BASE_URL}api/add/store`;
  return await httpClient._post(url, data, token);
};

export const fetchAllAdvertisments = async () => {
  const url = `${Config.API_BASE_URL}api/add/show`;
  return await httpClient.get(url);
};
