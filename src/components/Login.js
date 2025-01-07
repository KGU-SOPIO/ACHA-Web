import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Button from "../signup/Button";
import Footer from "./Footer";
import Input from "../signup/Input";

function Login() {
  const [userInfo, setUserInfo] = useState({
    studentNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const currentId = "202212345";
    const currentPwd = "1234@";

    // 임시 로그인 처리
    const isAuthenticated =
      userInfo.studentNumber === currentId && userInfo.password === currentPwd; // 실제 인증 로직을 여기에 추가
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
          <Input
            id="studentNumber"
            name="studentNumber"
            value={userInfo.studentNumber}
            onChange={handleChange}
            placeholder="학번"
            label="학번"
          />
          <Input
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            type="password"
            placeholder="비밀번호"
            label="비밀번호"
          />
          <Button name="로그인" />
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
