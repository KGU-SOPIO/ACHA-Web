import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Button from "../signup/Button";
import Footer from "./Footer";
import Input from "../signup/Input";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";

function Login() {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const currentId = "202212345";
    const currentPwd = "1234@";

    // 임시 로그인 처리
    const isAuthenticated =
      studentNumber === currentId && password === currentPwd; // 실제 인증 로직을 여기에 추가
    if (isAuthenticated) {
      setLoginCheck(false);
      navigate("/home");
    } else {
      setLoginCheck(true);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto py-12">
        <Logo className="w-[80px] h-[84px]" />
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center bg-white rounded-md max-w-[400px] w-full mt-[70px]"
        >
          {loginCheck && (
            <label className="text-red-400 flex ">
              학번 또는 비밀번호가 일치하지 않습니다.
            </label>
          )}
          <Input
            id="studentNumber"
            name="studentNumber"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            placeholder="학번"
          />
          <Input
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="비밀번호"
          />
          <div className="w-full">
            <div className="flex justify-between w-full items-center text-[14px]">
              <div className="flex items-center">
                <input
                  className="w-[20px] h-[20px] rounded-full"
                  type="checkbox"
                />
                <p className="ml-[6px]">자동 로그인</p>
              </div>
              <div className="underline">비밀번호 찾기</div>
            </div>
            <Button name="시작하기" loginCheck={loginCheck} />
          </div>
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
