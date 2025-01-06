import React, { useState } from "react";

import Footer from "./Footer";
import { Link } from "react-router-dom";

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    studentNumber: "",
    department: "",
    major: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };
  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto py-12">
        <h2 className="text-4xl font-bold p-2">ACHA</h2>

        <form
          className="flex flex-col items-center justify-center bg-white rounded-md border border-gray-300 p-12 w-full"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              이름
            </label>
            <input
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              type="text"
              placeholder="이름"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="studentNumber"
            >
              학번
            </label>
            <input
              id="studentNumber"
              name="studentNumber"
              value={userInfo.studentNumber}
              onChange={handleChange}
              type="text"
              placeholder="학번"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="department"
            >
              학부
            </label>
            <input
              id="department"
              name="department"
              value={userInfo.department}
              onChange={handleChange}
              type="text"
              placeholder="학부"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="major"
            >
              전공
            </label>
            <input
              id="major"
              name="major"
              value={userInfo.major}
              onChange={handleChange}
              type="text"
              placeholder="전공"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
              type="password"
              placeholder="비밀번호"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-main-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            회원가입
          </button>
        </form>

        <Link to="/login" className="text-blue-500 hover:underline">
          로그인으로 돌아가기
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
