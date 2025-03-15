import { ReactComponent as MediaIcon } from "../assets/media.svg";
import React from "react";
import { ReactComponent as TaskIcon } from "../assets/task.svg";
import { formatDday } from "../utils/utils";

const DdayRenderer = ({ items, getDday, formatDate }) => {
  let previousDday = null;

  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">데이터가 없습니다.</div>
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
            className={`inline-block mb-4 rounded-full text-center font-[Noto_Sans_KR] text-[14px] font-bold leading-[20px] bg-blue-100 items-center ${
              isDday ? "text-white" : ""
            }`}
          >
            <div
              className={`${
                isDday
                  ? "bg-main-blue text-white border-2 border-main-blue"
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
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-sm">{courseName}</p>
          <div className="flex justify-between items-center">
            <div className="text-sm mt-2 text-gray-500">{time} 까지</div>
            <a
              href={item.activityLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-2 px-4 py-2 border text-sm rounded-lg">
                <div className="flex items-center">
                  {activityType === "video" ? <MediaIcon /> : <TaskIcon />}
                  <div className="pl-2">
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
