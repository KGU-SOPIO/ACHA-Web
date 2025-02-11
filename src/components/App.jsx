import { Navigate, Route, Routes } from "react-router-dom";

import About from "./About";
import CourseNotice from "../courses/CourseNotice";
import Courses from "../courses/Courses";
import CoursesList from "./CoursesList";
import ErrorPage from "./ErrorPage";
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
        <Route path="/courses/:courseCode" element={<Courses />} />
        <Route path="/courses/:courseCode/notices" element={<CourseNotice />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
