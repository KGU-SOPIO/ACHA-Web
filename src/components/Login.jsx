import React, { useState } from "react";
import { fetchMemberData, login } from "../api/authApi.js";

import Button from "../signup/Button";
import Footer from "./Footer";
import Input from "../signup/Input";
import Loading01 from "./Loading01";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";
import { ReactComponent as Warning } from "../assets/warning.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginCheck(false);

    try {
      const result = await login(studentId, password);

      if (!result.success) {
        // 2-2. 학번, 비번으로 학생 정보 요청
        const memberData = await fetchMemberData(studentId, password);
        console.log("회원정보: ", memberData);
        // 2-3. 회원가입 인풋에서 보여주기 위해 데이터 전달
        navigate("/signup", { state: memberData });
        return;
      }

      navigate("/home");
    } catch (error) {
      console.error("로그인 에러:", error);
      if (error.code === "MEMBER_NOT_FOUND") {
        try {
          // 2-2. 학번, 비번으로 학생 정보 요청
          const memberData = await fetchMemberData(studentId, password);

          // 2-3. 회원가입 인풋에서 보여주기 위해 데이터 전달
          navigate("/signup", { state: memberData });
          return;
        } catch (fetchError) {
          console.error("학생 정보 요청 실패:", fetchError);
        }
      }
      setLoginCheck(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStudentIdChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setStudentId(value);
      setError("");
    } else {
      setError("학번에는 숫자만 입력 가능합니다.");
    }
  };
  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto py-24">
        <Logo className="w-[80px] h-[84px] mb-[70px]" />
        {isLoading ? (
          <Loading01 />
        ) : (
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-center bg-white rounded-md max-w-[400px] w-full"
          >
            {loginCheck && (
              <div className="flex items-center gap-[8px] border py-[8px] px-[17px] rounded-full mb-[20px] ">
                <Warning className="w-[24px] h-[24px]" />
                <label className="text-red-500 flex text-[16px]">
                  학번 또는 비밀번호가 일치하지 않습니다.
                </label>
              </div>
            )}
            {error && (
              <div className="flex items-center gap-[8px] border py-[8px] px-[17px] rounded-full mb-[20px] ">
                <Warning className="w-[24px] h-[24px]" />
                <label className="text-red-500 flex text-[16px]">{error}</label>
              </div>
            )}
            <Input
              id="studentId"
              name="studentId"
              value={studentId}
              onChange={handleStudentIdChange}
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
