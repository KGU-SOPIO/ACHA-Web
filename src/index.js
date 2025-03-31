import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./components/App";
import AuthErrorPage from "./error/AuthErrorPage";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFoundPage from "./error/NotFoundPage";
import PasswordError from "./error/PasswordError";
import React from "react";
import ReactDOM from "react-dom/client";
import { configureSaveTokens } from "./api/server";
import { saveTokens } from "./api/tokenService";

export const initializeApi = () => {
  configureSaveTokens(saveTokens);
};

export * from "./api/tokenService";
export * from "./api/authApi";
export { server } from "./api/server";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passwordError" element={<PasswordError />} />
      <Route path="/LoginError" element={<AuthErrorPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
);
