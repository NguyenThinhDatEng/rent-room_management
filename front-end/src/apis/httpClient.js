import axios from "axios";

// tạo 1 axios instances
const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000, // Nếu kết nối có vấn đề -> tránh treo kết nối mãi mãi
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export default httpClient;
