// 토큰 관련 유틸리티 함수들을 모아둔 파일

let accessToken = null;

export const saveTokens = (newAccessToken, refreshToken) => {
  accessToken = newAccessToken;
  sessionStorage.setItem("refreshToken", refreshToken);
};

export const getTokens = () => {
  return {
    accessToken: accessToken,
    refreshToken: sessionStorage.getItem("refreshToken"),
  };
};

export const clearTokens = () => {
  accessToken = null;
  sessionStorage.removeItem("refreshToken");
};

export const getAuthHeader = () => {
  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
};
