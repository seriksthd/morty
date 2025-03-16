import axios from "axios";

export const axiosMorti = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 7000,
  headers: {
    Accept: "application/json",
  },
});
