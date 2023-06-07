import axios from "axios";

const BASE_URL = "http://wazard.shop:9000";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// 요청 인터셉터를 등록
axiosApi.interceptors.request.use((config) => {
  if (!config.headers) {
    return config;
  }
  const token = localStorage.getItem("accessToken");

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
