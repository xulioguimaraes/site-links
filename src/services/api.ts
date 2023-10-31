import axios from "axios";

const api = axios.create({
  baseURL: process.env.VITE_API_SITE_URL,
});

export { api };
