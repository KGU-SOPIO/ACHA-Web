import React, { useState } from "react";

import { ReactComponent as BookIcon } from "../assets/bookIcon.svg";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as TaskIcon } from "./taskIcon.svg";

function WeeklyActivities({ contents }) {
  const [hoveredWeek, setHoveredWeek] = useState(null);

  const filteredWeeks = contents.filter((weekData) =>
    weekData.contents.some(
      (activity) =>
        activity.type === "assignment" || activity.type === "lecture"
    )
  );

  return (
    <>
      <div className="flex ml-[22px] mb-[12px]">
        <p className="text-[14px]">
          <span className="font-bold">주차 별 </span>
          <span>학습 활동</span>
        </p>
        <BookIcon />
      </div>

      <div className="flex space-x-4 overflow-x-auto">
        {filteredWeeks.length > 0 ? (
          filteredWeeks.map((weekData) => {
            const filteredContents = weekData.contents.filter(
              (activity) =>
                activity.type === "assignment" || activity.type === "lecture"
            );
            const isHovered = hoveredWeek === weekData.week;
            const displayContents = isHovered
              ? filteredContents
              : filteredContents.slice(0, 1);

            return (
              <div
                key={`week-${weekData.week}`}
                className={`
                  flex-none w-[300px] px-[24px] py-[21px] 
                  border rounded-xl relative 
                  transition-all duration-300 ease-in-out
                  ${isHovered ? "shadow-lg" : ""}
                `}
                onMouseEnter={() => setHoveredWeek(weekData.week)}
                onMouseLeave={() => setHoveredWeek(null)}
              >
                <div className="flex justify-between items-center mb-[12px]">
                  <p className="text-[14px]">
                    <span className="font-bold">{weekData.week}주차</span>
                  </p>
                  {filteredContents.length > 1 && !isHovered && (
                    <span className="text-[12px] text-blue-500">
                      +{filteredContents.length - 1}
                    </span>
                  )}
                </div>

                <div
                  className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${isHovered ? "max-h-96" : "max-h-[60px]"}
                `}
                >
                  {filteredContents.length > 0 ? (
                    displayContents.map((activity, index) => (
                      <div
                        key={`week-${weekData.week}-${
                          activity.code || activity.title
                        }`}
                        className={`
                          flex text-[14px] items-center justify-start 
                          p-[14px] border rounded-md mb-2 
                          transition-all duration-300 ease-in-out
                          opacity-${isHovered ? "100" : "0"}
                          ${
                            !(activity.available && activity.link)
                              ? "bg-gray-100 cursor-not-allowed text-gray-400"
                              : ""
                          }
                        `}
                        style={{
                          transitionDelay: `${index * 100}ms`,
                        }}
                      >
                        {activity.type === "assignment" ? (
                          <TaskIcon className="w-[24px] h-[24px]" />
                        ) : (
                          <MediaIcon className="w-[24px] h-[24px]" />
                        )}
                        <a
                          href={activity.available ? activity.link : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-[8px]"
                        >
                          {activity.title}
                        </a>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-[14px]">
                      등록된 학습 활동이 없습니다.
                    </p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-[14px]">
            등록된 학습 활동이 없습니다.
          </p>
        )}
      </div>
    </>
  );
}

export default WeeklyActivities;
