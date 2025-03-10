import React, { useState } from "react";

import Button from "../signup/Button";
import ConsentInformationModal from "../signup/ConsentInformationModal";
import Footer from "./Footer";
import Input from "../signup/Input";
import Loading01 from "./Loading01";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";
import SignupSuccess from "../signup/SignupSuccess";
import { signup } from "../api/authApi.js";
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

  const toggleConsentModal = () => {
    setIsConsentModalOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSignUpComplete = async () => {
    setIsConsentModalOpen(false);
    setIsLoading(true);
    setError("");

    try {
      await signup(userInfo);
      setIsSignUpComplete(true);
    } catch (error) {
      setError(error.message || "회원가입 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
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
            onSubmit={handleSubmit}
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
            <Button name="다음" onClick={toggleConsentModal} />
            {isConsentModalOpen && (
              <ConsentInformationModal
                onClose={toggleConsentModal}
                onAgree={handleSignUpComplete}
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
