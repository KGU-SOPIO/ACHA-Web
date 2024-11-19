import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./components/App";
import Login from "./components/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
);
