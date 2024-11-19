import { Navigate, Route, Routes } from "react-router-dom";

import Courses from "./Courses";
import Home from "./Home";
import Login from "./Login";
import MyPage from "./MyPage";
import Nav from "../Nav";
import Notifications from "./Notifications";
import React from "react";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};

export default App;
