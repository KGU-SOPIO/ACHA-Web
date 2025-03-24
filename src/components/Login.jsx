import React, { useState } from "react";
import { fetchMemberData, login, signup } from "../api/authApi.js";

import Button from "../signup/Button";
import ConsentInformationModal from "../signup/ConsentInformationModal.jsx";
import Footer from "./Footer";
import Input from "../signup/Input";
import Loading01 from "./Loading01";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";
import SignupSuccess from "../signup/SignupSuccess";
import { ReactComponent as Warning } from "../assets/warning.svg";

function Login() {
  // Login state
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  // Signup state
  const [userInfo, setUserInfo] = useState({
    studentId: "",
    password: "",
    name: "",
    college: "",
    department: "",
    major: "",
  });

  // UI state
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [modalMode, setModalMode] = useState("login");

  const handleOpenConsentModal = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateLoginInputs()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await login(studentId, password);

      if (!result.success) {
        const memberData = await fetchMemberData(studentId, password);
        setUserInfo({
          studentId,
          password,
          name: memberData.name || "",
          college: memberData.college || "",
          department: memberData.department || "",
          major: memberData.major || "",
        });

        setModalMode("login");
        setIsConsentModalOpen(true);
        return;
      }

      window.location.href = "/home";
    } catch (error) {
      console.error("로그인 에러:", error);

      if (error.code === "INVALID_STUDENT_ID_OR_PASSWORD") {
        setError("학번 또는 비밀번호를 잘못 입력했습니다.");
        return;
      }

      if (error.code === "MEMBER_NOT_AUTHENTICATED") {
        setError("서비스를 이용하기 위해서 2~3일이 소요됩니다.");
        return;
      }

      if (error.code === "MEMBER_NOT_FOUND") {
        try {
          const memberData = await fetchMemberData(studentId, password);
          setUserInfo({
            studentId,
            password,
            name: memberData.name || "",
            college: memberData.college || "",
            department: memberData.department || "",
            major: memberData.major || "",
          });

          setModalMode("login");
          setIsConsentModalOpen(true);
          return;
        } catch (fetchError) {
          console.error("학생 정보 요청 실패:", fetchError);
          setError("학번 또는 비밀번호가 일치하지 않습니다.");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginProcess = async () => {
    setError("");
    setIsLoading(true);

    try {
      const result = await login(studentId, password);

      if (!result.success) {
        const memberData = await fetchMemberData(studentId, password);
        setUserInfo({
          studentId,
          password,
          name: memberData.name || "",
          college: memberData.college || "",
          department: memberData.department || "",
          major: memberData.major || "",
        });

        setIsSignupMode(true);
        return;
      }

      window.location.href = "/home";
    } catch (error) {
      console.error("로그인 에러:", error);

      if (error.code === "INVALID_STUDENT_ID_OR_PASSWORD") {
        setError("학번 또는 비밀번호를 잘못 입력했습니다.");
        return;
      }

      if (error.code === "MEMBER_NOT_AUTHENTICATED") {
        setError("서비스를 이용하기 위해서 2~3일이 소요됩니다.");
        return;
      }

      if (error.code === "MEMBER_NOT_FOUND") {
        try {
          const memberData = await fetchMemberData(studentId, password);
          setUserInfo({
            studentId,
            password,
            name: memberData.name || "",
            college: memberData.college || "",
            department: memberData.department || "",
            major: memberData.major || "",
          });

          setIsSignupMode(true);
          return;
        } catch (fetchError) {
          console.error("학생 정보 요청 실패:", fetchError);
          setError("학번 또는 비밀번호가 일치하지 않습니다.");
        }
      }
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

  const validateLoginInputs = () => {
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

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setModalMode("signup");
    setIsConsentModalOpen(true);
  };

  if (isSignUpComplete) {
    return <SignupSuccess />;
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto py-24">
        <Logo className="w-[80px] h-[84px] mb-[70px]" />
        {isLoading ? (
          <Loading01 />
        ) : isSignupMode ? (
          // Signup Form
          <form
            className="flex flex-col items-center justify-center bg-white rounded-md max-w-[400px] w-full"
            onSubmit={handleSignupSubmit}
          >
            <Input
              id="name"
              name="name"
              value={userInfo.name}
              placeholder="-"
              label="이름"
              disabled
            />
            <Input
              id="college"
              name="college"
              value={userInfo.college}
              placeholder="-"
              label="단과대학"
              disabled
            />
            <Input
              id="department"
              name="department"
              value={userInfo.department}
              placeholder="-"
              label="학부"
              disabled
            />
            <Input
              id="major"
              name="major"
              value={userInfo.major || ""}
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

            <Button name="가입하기" type="submit" />
          </form>
        ) : (
          // Login Form
          <form
            onSubmit={handleOpenConsentModal}
            className="flex flex-col items-center justify-center bg-white rounded-md max-w-[400px] w-full"
          >
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
              onChange={(e) => setStudentId(e.target.value)}
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
              {/* <div className="flex justify-between w-full items-center text-[14px]">
                <div className="flex items-center">
                  <input
                    className="w-[20px] h-[20px] rounded-full"
                    type="checkbox"
                  />
                  <p className="ml-[6px]">자동 로그인</p>
                </div>
                <div className="underline cursor-pointer">비밀번호 찾기</div>
              </div> */}

              <Button name="시작하기" type="submit" />
            </div>
          </form>
        )}

        {isConsentModalOpen && (
          <ConsentInformationModal
            mode={modalMode}
            onClose={() => setIsConsentModalOpen(false)}
            onAgree={() => {
              setIsConsentModalOpen(false);
              if (modalMode === "login") {
                handleLoginProcess();
              } else if (modalMode === "signup") {
                handleSignUp();
              }
            }}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Login;
