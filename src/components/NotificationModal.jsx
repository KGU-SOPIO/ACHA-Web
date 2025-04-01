import { formatDate, getDday } from "../utils/utils";

import DdayRenderer from "../home/DdayRenderer";
import Loading01 from "./Loading01";
import React from "react";
import { usePriority } from "../contexts/PriorityContext";

const NotificationModal = ({ onClose }) => {
  const { lectures, assignments, isLoading, error } = usePriority();
  const [activeTab, setActiveTab] = React.useState("all");

  const filteredData = () => {
    if (activeTab === "lectures") return lectures;
    if (activeTab === "assignments") return assignments;
    return [...lectures, ...assignments].sort(
      (a, b) => getDday(a.date) - getDday(b.date)
    );
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <Loading01 />
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="p-8 px-12 rounded-lg bg-white border border-gray-300">
          <div className="text-red-500 text-center">{error}</div>
        </div>
      </div>
    );
  }

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
