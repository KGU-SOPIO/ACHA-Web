import { Navigate, Route, Routes } from "react-router-dom";

import About from "./About";
import AuthErrorPage from "../login/AuthErrorPage";
import CourseNotice from "../courses/CourseNotice";
import Courses from "../courses/Courses";
import CoursesList from "./CoursesList";
import Home from "./Home";
import Login from "./Login";
import MyPage from "./MyPage";
import Nav from "../Nav";
import PasswordError from "../login/PasswordError";
import React from "react";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordError" element={<PasswordError />} />
        <Route path="/courses/:courseCode" element={<Courses />} />
        <Route path="/courses/:courseCode/notices" element={<CourseNotice />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/LoginError" element={<AuthErrorPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
};

export default App;
