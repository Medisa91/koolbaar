import axios from "axios";

export const authorizedHttp = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Accept-Language": localStorage.getItem("language"),
    Currency: "USD",
    // Currency: localStorage.getItem("currency"),
    Authorization: `${window.localStorage.getItem(
      "tokenType"
    )} ${window.localStorage.getItem("token")}`,
  },
});

export const registerHttp = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Accept-Language": localStorage.getItem("language"),
    // Currency: localStorage.getItem("currency"),
    Currency: "USD",
  },
});

export const authorizedFormDataHttp = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Accept-Language": localStorage.getItem("language"),
    // Currency: localStorage.getItem("currency"),
    Currency: "USD",
    Authorization: `${window.localStorage.getItem(
      "tokenType"
    )} ${window.localStorage.getItem("token")}`,
  },
});

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Accept-Language": localStorage.getItem("language"),
    Currency: "USD",
    // Currency: localStorage.getItem("currency"),
  },
});
