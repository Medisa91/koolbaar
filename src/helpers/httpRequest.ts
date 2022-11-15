import axios from "axios";
import { toast } from "react-toastify";

export const authorizedHttp = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `${window.localStorage.getItem(
      "tokenType"
    )} ${window.localStorage.getItem("token")}`,
  },
});

export const registerHttp = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `${window.localStorage.getItem(
      "tokenType"
    )} ${window.localStorage.getItem("token")}`,
  },
});

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("expire");
      window.localStorage.removeItem("refreshToken");
      window.localStorage.removeItem("tokenType");
      const isBrowser = typeof window !== "undefined";
      if (isBrowser) {
        const win: Window = window;
        win.location = "/login";
      }
    } else if (400 === error.response.status) {
      toast.error(error.message);
    } else if (500 === error.response.status) {
      toast.error("خطایی از سمت سرور پیش آمده است");
    } else {
      return Promise.reject(error);
    }
  }
);
