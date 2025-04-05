import { Navigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getTokens, saveTokens } from "../api/tokenService";

import Loading01 from "./Loading01";
import { reissueToken } from "../api/authApi";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const { accessToken, refreshToken } = getTokens();

        if (accessToken) {
          setIsAuthenticated(true);
        } else if (refreshToken) {
          const response = await reissueToken(refreshToken);
          const { accessToken: newAccessToken } = response;

          saveTokens(newAccessToken, refreshToken);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("인증 확인 중 오류:", error);
        setIsAuthenticated(false);
      } finally {
        setIsAuthChecking(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isAuthChecking) {
    return <Loading01 />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
