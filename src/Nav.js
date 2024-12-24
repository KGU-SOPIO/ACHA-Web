import { ReactComponent as Logo } from "./assets/sopio_logo.svg";
import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="flex justify-between items-center px-12">
        <div>
          <Logo />
        </div>
        <ul className="flex justify-center gap-32 py-4 font-bold">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-main-blue " : "hover:text-main-blue"
              }
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? "text-main-blue " : "hover:text-main-blue"
              }
            >
              강좌
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                isActive ? "text-main-blue " : "hover:text-main-blue"
              }
            >
              알림
            </NavLink>
          </li>
        </ul>
        <div>
          <a
            href="/"
            aria-label="마이페이지로 이동"
            className="text-red-500 bg-red-100 hover:bg-red-200 p-2 px-6 rounded-md"
          >
            로그아웃
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
