import { Navigate, useLocation } from "react-router-dom";

import React from "react";
import { getTokens } from "../api/tokenService";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { accessToken } = getTokens();

  if (!accessToken) {
    return <Navigate to="/not-found" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
