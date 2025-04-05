import { Navigate, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import AuthErrorPage from "../error/AuthErrorPage";
import CourseNotice from "../courses/CourseNotice";
import Courses from "../courses/Courses";
import CoursesList from "../pages/CoursesList";
import Home from "../pages/Home";
import { LectureProvider } from "../hooks/useLecture";
import Login from "../pages/Login";
import Nav from "../Nav";
import PasswordError from "../error/PasswordError";
import { PriorityProvider } from "../contexts/PriorityContext";
import ProtectedRoute from "./ProtectedRoute";
import React from "react";
import { TodayLectureProvider } from "../contexts/TodayLectureContext";
import { UserSettingsProvider } from "../contexts/UserSettingsContext";

const App = () => {
  return (
    <UserSettingsProvider>
      <TodayLectureProvider>
        <PriorityProvider>
          <LectureProvider>
            <Nav />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/LoginError" element={<AuthErrorPage />} />
              <Route path="/passwordError" element={<PasswordError />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/courses/:courseCode"
                element={
                  <ProtectedRoute>
                    <Courses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/courses/:courseCode/notices"
                element={
                  <ProtectedRoute>
                    <CourseNotice />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/courses"
                element={
                  <ProtectedRoute>
                    <CoursesList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Routes>
          </LectureProvider>
        </PriorityProvider>
      </TodayLectureProvider>
    </UserSettingsProvider>
  );
};

export default App;
