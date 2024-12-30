import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Footer from "./Footer";

function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const currentId = "202212345";
    const currentPwd = "1234@";

    // 임시 로그인 처리
    const isAuthenticated = id === currentId && pwd === currentPwd; // 실제 인증 로직을 여기에 추가
    if (isAuthenticated) {
      navigate("/home");
    } else {
      alert("로그인 실패\n : ID 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto py-12">
        <h2 className="text-4xl font-bold p-2">ACHA</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center bg-white rounded-md border border-gray-300 p-12 w-full"
        >
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="studentId"
            >
              학번
            </label>
            <input
              id="studentId"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="학번"
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
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="비밀번호"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-main-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            로그인
          </button>
        </form>
        <p>
          아직 회원이 아니신가요?{" "}
          <Link to="/signup" className="text-main-blue hover:underline">
            회원가입
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
