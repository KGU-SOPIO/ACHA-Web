// 토큰 관련 유틸리티 함수들을 모아둔 파일

export const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const getTokens = () => {
  return {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
};

export const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};
