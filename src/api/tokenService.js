// 토큰 관련 유틸리티 함수들을 모아둔 파일

let accessToken = null;

export const saveTokens = (newAccessToken, refreshToken) => {
  accessToken = newAccessToken;
  localStorage.setItem("refreshToken", refreshToken);
};

export const getTokens = () => {
  return {
    accessToken: accessToken,
    refreshToken: localStorage.getItem("refreshToken"),
  };
};

export const clearTokens = () => {
  accessToken = null;
  localStorage.removeItem("refreshToken");
};
