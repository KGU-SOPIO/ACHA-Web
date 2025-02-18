import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./components/App";
import ErrorPage from "./login/AuthErrorPage";
import Landing from "./components/Landing";
import Login from "./components/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import SignUp from "./components/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
);
