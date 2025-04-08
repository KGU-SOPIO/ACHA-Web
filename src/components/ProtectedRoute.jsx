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
        // getTokens를 비동기로 호출합니다.
        const { accessToken, refreshToken } = await getTokens();

        if (accessToken) {
          setIsAuthenticated(true);
        } else if (refreshToken) {
          const response = await reissueToken(refreshToken);
          const { accessToken: newAccessToken } = response;

          // saveTokens도 await 처리를 해줍니다.
          await saveTokens(newAccessToken, refreshToken);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
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
