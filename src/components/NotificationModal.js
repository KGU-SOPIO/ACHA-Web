import React, { useState } from "react";

import { ReactComponent as MediaIcon } from "../assets/media.svg";
import { ReactComponent as TaskIcon } from "../assets/task.svg";
import mockData from "../mocks/taskMedia.json";

const NotificationModal = ({ onClose }) => {
  const { lectures, assignments } = mockData;
  const [activeTab, setActiveTab] = useState("all");

  const getDday = (itemDate) => {
    const today = new Date();
    const targetDate = new Date(itemDate);
    const diffTime = targetDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDday = (diffDays) => {
    if (diffDays === 0) {
      return "D - Day";
    } else if (diffDays > 0) {
      return `D - ${diffDays}`;
    } else {
      return `D + ${Math.abs(diffDays)}`;
    }
  };

  const sortByDday = (items) =>
    [...items].sort((a, b) => getDday(a.date) - getDday(b.date));

  const filteredData = () => {
    if (activeTab === "lectures") return sortByDday(lectures);
    if (activeTab === "assignments") return sortByDday(assignments);
    return sortByDday([...lectures, ...assignments]);
  };

  const formatDate = (itemDate) => {
    const date = new Date(itemDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}월 ${day}일`;
  };

  const renderItems = (items) => {
    let previousDday = null;

    return items.map((item) => {
      const dDayNumber = getDday(item.date);
      const dDay = formatDday(dDayNumber);
      const formattedDate = formatDate(item.date);
      const isDday = dDay === "D - Day";
      const showDday = dDay !== previousDday;
      previousDday = dDay;

      return (
        <div key={`${item.lectureId || item.assignmentId}-${item.date}`}>
          {showDday && (
            <div
              className={`inline-block mb-4 rounded-full  text-center font-[Noto_Sans_KR] text-[14px] font-bold leading-[20px] bg-blue-100 items-center ${
                isDday ? "text-white" : ""
              }`}
            >
              <div
                className={`${
                  isDday
                    ? "bg-main-blue text-white border-2 border-main-blue "
                    : "text-main-blue border-2 border-main-blue bg-[rgba(245,246,248,1)]"
                } font-bold rounded-full p-2 px-4 inline-block`}
              >
                {dDay}
              </div>
              <div className="text-main-blue font-bold rounded-lg p-1 inline-block px-2 pr-4">
                {formattedDate}
              </div>
            </div>
          )}
          <div className="mb-4 p-4 border rounded-lg shadow-sm">
            <h3 className="text-md font-bold">{item.title}</h3>
            <p className="text-sm">{item.subject}</p>
            <div className="flex justify-between items-center">
              <div className="text-sm mt-2 text-gray-500">{item.time}</div>
              <button className="mt-2 px-4 py-2 border text-sm rounded-lg">
                <div className="flex items-center">
                  {item.type === "강의 시청" ? <MediaIcon /> : <TaskIcon />}
                  <div className="pl-2">{item.type}</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      );
    });
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
          {renderItems(filteredData())}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
