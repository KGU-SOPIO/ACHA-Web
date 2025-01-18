import React, { useState } from "react";

import Button from "../signup/Button";
import Footer from "./Footer";
import Input from "../signup/Input";
import Loading01 from "./Loading01";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";
import { ReactComponent as Warning } from "../assets/warning.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const currentId = "202212345";
    const currentPwd = "1234@";

    // setTimeout(() => {
    //   navigate("/error");
    //   setIsLoading(false);
    // }, 3000);
    // 임시 로그인 처리
    setTimeout(() => {
      const isAuthenticated =
        studentNumber === currentId && password === currentPwd; // 인증 로직
      if (isAuthenticated) {
        setLoginCheck(false);
        navigate("/home");
      } else {
        setLoginCheck(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto py-24">
        <Logo className="w-[80px] h-[84px]" />
        {isLoading ? (
          <Loading01 />
        ) : (
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-center bg-white rounded-md max-w-[400px] w-full"
          >
            {loginCheck && (
              <div className="flex items-center gap-[8px] border py-[8px] px-[17px] rounded-full mb-[20px] mt-[30px]">
                <Warning className="w-[24px] h-[24px]" />
                <label className="text-red-500 flex text-[16px]">
                  학번 또는 비밀번호가 일치하지 않습니다.
                </label>
              </div>
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
            {/*로직 구현해야하고 회원테이블에 없을 시 자동으로 회원가입되게 수정해야함*/}
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

              <Button name="시작하기" onClick={handleLogin} />
            </div>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Login;
