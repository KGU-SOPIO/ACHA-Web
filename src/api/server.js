import {
  clearTokens,
  getAuthHeader,
  getTokens,
  saveTokens,
} from "./tokenService";

// axiosInstance.js
import axios from "axios";
import { reissueToken } from "./authApi";

export const server = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// 요청 인터셉터: 비동기 함수로 Auth 헤더 가져오기
server.interceptors.request.use(
  async (config) => {
    const authHeader = await getAuthHeader();
    config.headers = { ...config.headers, ...authHeader };
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 403 에러 시 토큰 재발급 처리
server.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { refreshToken } = await getTokens();

    if (
      error.response?.status === 403 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const response = await reissueToken(refreshToken);
        const { accessToken } = response;
        // 재발급 받은 토큰 저장 (refreshToken은 그대로 사용)
        await saveTokens(accessToken, refreshToken);

        const newAuthHeader = { Authorization: `Bearer ${accessToken}` };
        server.defaults.headers.common["Authorization"] =
          newAuthHeader.Authorization;
        originalRequest.headers["Authorization"] = newAuthHeader.Authorization;
        return server(originalRequest);
      } catch (refreshError) {
        clearTokens();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const configureSaveTokens = (saveTokensFn) => {
  window.saveTokens = saveTokensFn;
};
