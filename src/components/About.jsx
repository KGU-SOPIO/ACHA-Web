import DeveloperData from "../mocks/member.json";
import Footer from "./Footer";
import { ReactComponent as LeftArrow } from "../courses/leftArrow.svg";
import React from "react";
import { ReactComponent as TeamIcon } from "../assets/teamIcon.svg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="pt-[114px] px-[346px] pb-[208px]">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-[77px] max-w-6xl mx-auto">
            <div className="flex flex-col justify-start">
              <button
                onClick={() => navigate(`/home`)}
                className="flex items-center mb-[20px]"
              >
                <LeftArrow className="w-[40px] h-[40px] mr-[8px] bg-gray-100 p-[8px] rounded-full" />
              </button>
              <div className="bg-white rounded-xl pt-[35px] mb-[10px]">
                <h2 className="text-[14px] mb-[8px] text-main-blue">About</h2>
                <div className="flex items-center mb-[16px]">
                  <h1 className="text-[24px] font-bold mr-[10px]">SOPIO</h1>
                </div>
              </div>
              <div className="text-gray-700">
                <p className="mb-[24px]">
                  'Software of Public Interest Organization' <br /> 2023년에
                  2명으로 시작하여 현재는 5인으로 구성된 소프트웨어
                  개발팀입니다.
                </p>

                <p className="mb-[24px]">
                  공익과 사용자 중심의 가치를 추구하며, 기술을 통해 일상의
                  불편함을 해결하고, 누구나 쉽게 접근할 수 있는 <br />
                  유용한 솔루션을 제공하는 것을 목표로 합니다.
                </p>
                <p className="mb-[24px]">
                  <span>
                    첫 번째 프로젝트로 스마트한 알림 관리 어플리케이션
                  </span>
                  <br />
                  <span className="text-main-blue font-bold">‘아차’</span>를
                  선보입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start max-w-6xl mx-auto">
            <div className="flex gap-[7px] items-center mb-[30px]">
              <TeamIcon />
              <h2 className="text-[16px] font-bold">참여진</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[103px] gap-y-[24px]">
              {DeveloperData.map((member) => (
                <div
                  key={member.id}
                  className="border border-gray-200 rounded-lg p-4 flex flex-col items-center w-full text-[14px]"
                >
                  <div className="w-full flex justify-between items-center mb-[16px]">
                    <h3 className="text-[20px]">{member.name}</h3>
                    <p className="text-main-blue bg-blue-100 px-[12px] py-[6px] rounded-2xl">
                      {member.department}
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center text-gray-500">
                    <p>{member.major}</p>
                    <p>{member.insta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
