import { clearTokens, getTokens, saveTokens } from "./tokenService";

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
    const { accessToken } = getTokens();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

server.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { refreshToken } = getTokens();
        const response = await reissueToken(refreshToken);

        const { accessToken } = response;
        const { refreshToken: currentRefreshToken } = getTokens();
        saveTokens(accessToken, currentRefreshToken);

        server.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

        return server(originalRequest);
      } catch (refreshError) {
        clearTokens();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const configureSaveTokens = (saveTokensFn) => {
  window.saveTokens = saveTokensFn;
};
