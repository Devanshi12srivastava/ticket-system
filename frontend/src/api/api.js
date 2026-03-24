import axios from "axios";

const API = axios.create({
  baseURL:  import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("BASE URL:", import.meta.env.VITE_API_URL);
export default API;