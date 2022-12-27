import { Config } from "../Config";
import * as httpClient from "./HttpClient";

export const registerUser = async (data, token) => {
  const url = `${Config.API_BASE_URL}api/auth/signup`;
  return await httpClient.post(url, data, token);
};

export const sendVerificationEmail = async (email) => {
  const url = `${Config.API_BASE_URL}api/auth/password/email`;
  return await httpClient.post(url, { email: email });
};

export const changePassword = async (password, token) => {
  const url = `${Config.API_BASE_URL}api/auth/password/reset'`;
  return await httpClient.post(url, password);
};
