import { Config } from "../Config";
import * as httpClient from "./HttpClient";

export const registerUser = async (data) => {
  const url = `${Config.API_BASE_URL}api/user/signup`;
  return await httpClient.post(url, data);
};

export const sendVerificationEmail = async (email) => {
  const url = `${Config.API_BASE_URL}api/user/password/email`;
  return await httpClient.post(url, { email: email });
};

export const changePassword = async (token, data) => {
  const url = `${Config.API_BASE_URL}api/user/password/reset'`;
  return await httpClient.post(url, token, data);
};
