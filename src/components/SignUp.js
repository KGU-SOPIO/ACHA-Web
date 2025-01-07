import React, { useState } from "react";

import Button from "../signup/Button";
import Footer from "./Footer";
import Input from "../signup/Input";
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
          <Input
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            placeholder="이름"
            label="이름"
          />
          <Input
            id="studentNumber"
            name="studentNumber"
            value={userInfo.studentNumber}
            onChange={handleChange}
            placeholder="학번"
            label="학번"
          />
          <Input
            id="department"
            name="department"
            value={userInfo.department}
            onChange={handleChange}
            placeholder="학부"
            label="학부"
          />
          <Input
            id="major"
            name="major"
            value={userInfo.major}
            onChange={handleChange}
            placeholder="전공"
            label="전공"
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
          <Button name="회원가입" />
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
