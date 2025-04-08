// tokenService.js
import { decryptData, encryptData, getEncryptionKey } from "./cryptoUtils";

// 여기서는 메모리상의 변수 대신 모두 sessionStorage에 저장합니다.

export const saveTokens = async (newAccessToken, refreshToken) => {
  const key = await getEncryptionKey();
  const encryptedAccess = await encryptData(newAccessToken, key);
  const encryptedRefresh = await encryptData(refreshToken, key);
  sessionStorage.setItem("accessToken", JSON.stringify(encryptedAccess));
  sessionStorage.setItem("refreshToken", JSON.stringify(encryptedRefresh));
};

export const getTokens = async () => {
  const key = await getEncryptionKey();
  const encryptedAccessStr = sessionStorage.getItem("accessToken");
  const encryptedRefreshStr = sessionStorage.getItem("refreshToken");

  let accessToken = null;
  let refreshToken = null;

  if (encryptedAccessStr) {
    const encryptedAccess = JSON.parse(encryptedAccessStr);
    accessToken = await decryptData(
      encryptedAccess.data,
      encryptedAccess.iv,
      key
    );
  }
  if (encryptedRefreshStr) {
    const encryptedRefresh = JSON.parse(encryptedRefreshStr);
    refreshToken = await decryptData(
      encryptedRefresh.data,
      encryptedRefresh.iv,
      key
    );
  }
  return { accessToken, refreshToken };
};

export const clearTokens = () => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
  sessionStorage.removeItem("encryptionSalt");
};

export const getAuthHeader = async () => {
  const { accessToken } = await getTokens();
  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
};
