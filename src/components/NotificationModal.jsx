import React, { useState } from "react";
import { formatDate, getDday, parseMockData, sortByDday } from "../utils/utils";

import DdayRenderer from "../home/DdayRenderer";
import mockData from "../mocks/taskMedia.json";

const NotificationModal = ({ onClose }) => {
  const lectures = parseMockData(mockData.lectures);
  const assignments = parseMockData(mockData.assignments);
  const [activeTab, setActiveTab] = useState("all");

  const filteredData = () => {
    if (activeTab === "lectures") return sortByDday(lectures);
    if (activeTab === "assignments") return sortByDday(assignments);
    return sortByDday([...lectures, ...assignments]);
  };

  return (
    <div className="fixed inset-0  flex items-start justify-end mt-[61px] mr-[100px]">
      <div className="absolute inset-0 " onClick={onClose}></div>
      <div className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-md w-[444px] ">
        <div className="flex justify-center mb-4 mx-[70px] bg-gray-100 p-[3px] rounded-full">
          <button
            className={`py-[7px] px-[27px] rounded-full ${
              activeTab === "all"
                ? "text-main-blue bg-white font-bold"
                : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setActiveTab("all")}
          >
            전체
          </button>
          <button
            className={`py-[7px] px-[27px] rounded-full ${
              activeTab === "assignments"
                ? "text-main-blue bg-white font-bold"
                : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setActiveTab("assignments")}
          >
            과제
          </button>
          <button
            className={`py-[7px] px-[27px] rounded-full ${
              activeTab === "lectures"
                ? "text-main-blue bg-white font-bold"
                : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setActiveTab("lectures")}
          >
            강의
          </button>
        </div>
        <div className="max-h-[740px] overflow-y-auto">
          <DdayRenderer
            items={filteredData()}
            getDday={getDday}
            formatDate={formatDate}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
