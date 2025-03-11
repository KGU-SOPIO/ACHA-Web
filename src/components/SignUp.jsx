import React, { useState } from "react";
import { fetchMemberData, login, signup } from "../api/authApi.js";

import Button from "../signup/Button";
import ConsentInformationModal from "../signup/ConsentInformationModal";
import Footer from "./Footer";
import Input from "../signup/Input";
import Loading01 from "./Loading01";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";
import SignupSuccess from "../signup/SignupSuccess";
import { ReactComponent as Warning } from "../assets/warning.svg";
import { useLocation } from "react-router-dom";

function SignUp() {
  const location = useLocation();
  const studentData = location.state || {};

  const [userInfo, setUserInfo] = useState({
    studentId: "",
    password: "",
    name: studentData.name || "",
    college: studentData.college || "",
    department: studentData.department || "",
    major: studentData.major || "",
  });

  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    const { studentId, password } = userInfo;

    const studentIdPattern = /^[0-9]+$/;
    if (!studentId || !studentIdPattern.test(studentId)) {
      setError("학번은 숫자만 입력 가능합니다.");
      return false;
    }
    if (!studentId || !password) {
      setError("학번과 비밀번호를 모두 입력해주세요.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLoginValidation = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setIsLoading(true);
    setError("");

    try {
      const result = await login(userInfo.studentId, userInfo.password);
      if (!result.success) {
        const memberData = await fetchMemberData(
          userInfo.studentId,
          userInfo.password
        );
        console.log("회원정보: ", memberData);
        setIsConsentModalOpen(true);
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      if (error.code === "MEMBER_NOT_FOUND") {
        try {
          setIsConsentModalOpen(true);
          return;
        } catch (fetchError) {
          console.error("학생 정보 요청 실패:", fetchError);
        }
      }
      setError(error.message || "서버 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    setError("");

    try {
      await signup({ ...userInfo });
      setIsSignUpComplete(true);
    } catch (error) {
      setError(error.message || "회원가입 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSignUpComplete) {
    return <SignupSuccess />;
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto py-12">
        <Logo className="w-[80px] h-[84px]" />
        {isLoading ? (
          <Loading01 />
        ) : (
          <form
            className="flex flex-col items-center justify-center bg-white rounded-md max-w-[400px] w-full mt-[70px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              placeholder="이름"
              label="이름"
              disabled
            />
            <Input
              id="college"
              name="college"
              value={userInfo.college}
              onChange={handleChange}
              placeholder="단과대학"
              label="단과대학"
              disabled
            />
            <Input
              id="department"
              name="department"
              value={userInfo.department}
              onChange={handleChange}
              placeholder="학부"
              label="학부"
              disabled
            />
            <Input
              id="major"
              name="major"
              value={userInfo.major || ""}
              onChange={handleChange}
              placeholder="-"
              label="전공"
              disabled
            />

            {error && (
              <div className="flex items-center gap-[8px] border py-[8px] px-[17px] rounded-full mb-[20px] ">
                <Warning className="w-[24px] h-[24px]" />
                <label className="text-red-500 flex text-[16px]">{error}</label>
              </div>
            )}

            <Input
              id="studentId"
              name="studentId"
              value={userInfo.studentId}
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

            <Button name="다음" onClick={handleLoginValidation} />

            {isConsentModalOpen && (
              <ConsentInformationModal
                onClose={() => setIsConsentModalOpen(false)}
                onAgree={handleSignUp}
              />
            )}
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
