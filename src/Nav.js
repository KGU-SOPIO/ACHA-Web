import { NavLink, useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "./assets/sopio_logo.svg";
import { ReactComponent as MyIcon } from "./assets/myIcon.svg";
import { ReactComponent as NotificationsIcon } from "./assets/bellIcon.svg";
import React from "react";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };
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
        </ul>
        <div className="flex">
          <NavLink
            to="/notifications"
            className="mr-[9px] w-[36px] h-[36x] bg-[rgba(240,246,255,1)] rounded-full p-[8px]"
          >
            <NotificationsIcon />
          </NavLink>
          <NavLink
            to="/myPage"
            className="bg-[rgba(240,246,255,1)] rounded-full p-[8px]"
          >
            <MyIcon />
          </NavLink>
          {/* <button
            onClick={handleLogout}
            className="text-red-500 bg-red-100 hover:bg-red-200 p-2 px-6 rounded-md"
          >
            로그아웃
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
