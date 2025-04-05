import {
  clearTokens,
  getAuthHeader,
  getTokens,
  saveTokens,
} from "./tokenService";

import axios from "axios";
import { reissueToken } from "./authApi";

export const server = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

server.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      ...getAuthHeader(),
    };
    return config;
  },
  (error) => Promise.reject(error)
);

server.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const { refreshToken } = getTokens();
    if (
      error.response?.status === 403 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const response = await reissueToken(refreshToken);
        const { accessToken } = response;

        saveTokens(accessToken, refreshToken);

        server.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

        return server(originalRequest);
      } catch (refreshError) {
        console.error("토큰 재발급 실패:", refreshError);

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
