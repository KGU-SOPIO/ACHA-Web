import { Navigate, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import AuthErrorPage from "../error/AuthErrorPage";
import CourseNotice from "../courses/CourseNotice";
import Courses from "../courses/Courses";
import CoursesList from "../pages/CoursesList";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyPage from "./MyPage";
import Nav from "../Nav";
import PasswordError from "../error/PasswordError";
import React from "react";
import { TodayLectureProvider } from "../contexts/TodayLectureContext";
import { UserSettingsProvider } from "../contexts/UserSettingsContext";

const App = () => {
  return (
    <UserSettingsProvider>
      <TodayLectureProvider>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordError" element={<PasswordError />} />
          <Route path="/courses/:courseCode" element={<Courses />} />
          <Route
            path="/courses/:courseCode/notices"
            element={<CourseNotice />}
          />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/LoginError" element={<AuthErrorPage />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </TodayLectureProvider>
    </UserSettingsProvider>
  );
};

export default App;
