import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./components/App";
import AuthErrorPage from "./login/AuthErrorPage";
import Landing from "./components/Landing";
import Login from "./components/Login";
import NotFoundPage from "./components/NotFoundPage";
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
      <Route path="/LoginError" element={<AuthErrorPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
);
