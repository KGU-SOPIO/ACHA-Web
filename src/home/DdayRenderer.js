import { ReactComponent as MediaIcon } from "./media.svg";
import React from "react";
import { ReactComponent as TaskIcon } from "./task.svg";
import { formatDday } from "../utils/utils";

const DdayRenderer = ({ items, getDday, formatDate }) => {
  let previousDday = null;

  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">남은 활동이 없어요</div>
    );
  }

  return items.map((item) => {
    const itemDate = item.date || new Date().toISOString();
    const dDay = formatDday(getDday(itemDate));
    const formattedDate = formatDate(itemDate);
    const isDday = dDay === "D - Day";
    const showDday = dDay !== previousDday;
    previousDday = dDay;

    const key =
      item.activityCode || `${item.courseName}-${item.title}-${Math.random()}`;

    const title = item.activityName || item.title || "제목 없음";
    const courseName = item.courseName || "강의명 없음";
    const time = item.time || "23:59";

    const activityType =
      item.activityType ||
      (item.type === "ASSIGNMENT" ? "assignment" : "video");

    return (
      <div key={key}>
        {showDday && (
          <div
            className={`inline-block mb-[13px] rounded-full text-center text-[14px] font-bold leading-[20px] bg-blue-100 items-center ${
              isDday ? "text-white" : ""
            }`}
          >
            <div
              className={`${
                isDday
                  ? "bg-main-blue text-white border-2 border-main-blue"
                  : "text-main-blue border-2 border-main-blue bg-[rgba(245,246,248,1)]"
              } font-bold rounded-full px-[18px] py-[5px] inline-block`}
            >
              {dDay}
            </div>
            <div className="text-main-blue font-bold rounded-lg p-1 inline-block px-2 pr-4">
              {formattedDate}
            </div>
          </div>
        )}
        <div className="mb-[16px] py-[15px] pl-[23px] pr-[21px] rounded-[20px] border border-[#E4E8F1] bg-white text-[#3C3C3C] leading-normal font-normal">
          <h3 className="font-medium text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
            {title}
          </h3>
          <p className="text-[11px] sm:text-[12px] md:text-[13px]">
            {courseName}
          </p>
          <div className="flex justify-between items-end">
            <p className="text-[#979797]">
              <span className="text-[10px] sm:text-[13px] md:text-[14px] font-medium">
                {time}
              </span>
              <span className="text-[10px] md:text-[12px]">까지</span>
            </p>
            <a
              href={item.activityLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-[9px] px-[8px] py-[4px] md:px-[15px] md:py-[5px] border text-[8px] md:text-[14px] rounded-lg">
                <div className="flex items-center">
                  {activityType === "video" ? <MediaIcon /> : <TaskIcon />}
                  <div className="pl-[1px] md:pl-[2px]">
                    {activityType === "video" ? "강의 시청" : "과제 보기"}
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  });
};

export default DdayRenderer;
