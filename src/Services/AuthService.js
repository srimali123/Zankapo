
import { Config } from "../Config";
import * as httpClient from './HttpClient';

const rememberMeUsernameKey = 'USERNAME';
const rememberMePassword = 'PASSWORD';

export const loginUser = async (email, password) => {
    const url = `${Config.API_BASE_URL}api/auth/login`;
    return await httpClient.post(url, {email, password})
}
 

export const registerUser = async (data, token) => {
    const url = `${Config.API_BASE_URL}api/auth/signup`;
    return await httpClient.post(url, data, token);
};

export const rememberUsernameKey = async (value) => {
    try {
      await localStorage.setItem(rememberMeUsernameKey, value);
    } catch (e) {
      console.error(e);
    }
};

export const getUsernameKey = async () => {
    try {
      let retrieveItem = await localStorage.getItem(rememberMeUsernameKey);
      return retrieveItem;
    } catch (e) {
      console.error(e);
    }
};

export const rememberPassword = async (value) => {
    try {
      await localStorage.setItem(rememberMePassword, value);
    } catch (e) {
      console.error(e);
    }
};

export const getPassword = async () => {
    try {
      let retrieveItem = await localStorage.getItem(rememberMePassword);
      return retrieveItem;
    } catch (e) {
      console.error(e);
    }
};

