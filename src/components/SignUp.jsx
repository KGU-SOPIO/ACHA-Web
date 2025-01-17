import React, { useState } from "react";

import Button from "../signup/Button";
import Footer from "./Footer";
import Input from "../signup/Input";
import { Link } from "react-router-dom";
import Loading01 from "./Loading01";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    studentNumber: "",
    department: "",
    major: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
            <Button name="다음" />
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
