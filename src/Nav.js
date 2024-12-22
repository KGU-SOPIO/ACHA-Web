import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
      <ul className="flex justify-around py-4 text-gray-700">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-main-blue font-bold" : "hover:text-main-blue"
            }
          >
            홈
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-main-blue font-bold" : "hover:text-main-blue"
            }
          >
            강좌
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              isActive ? "text-main-blue font-bold" : "hover:text-main-blue"
            }
          >
            알림
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
