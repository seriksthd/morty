import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://5897f48c88358dfa.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
