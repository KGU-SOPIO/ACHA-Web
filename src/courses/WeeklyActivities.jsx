import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as BookIcon } from "./bookIcon.svg";
import { ReactComponent as LeftArrowIcon } from "../courses/left.svg";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as RightArrowIcon } from "../courses/right.svg";
import { ReactComponent as TaskIcon } from "./taskIcon.svg";

function WeeklyActivities({ contents }) {
  const [hoveredWeek, setHoveredWeek] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);

  const filteredWeeks = contents
    .map((weekData) => {
      const filteredContents = weekData.contents.filter((activity) => {
        if (!activity.available) return false;

        if (activity.type === "lecture") {
          return !activity.attendance;
        }

        if (activity.type === "assignment") {
          return activity.submitStatus !== "done";
        }

        return false;
      });

      if (filteredContents.length > 0) {
        return {
          ...weekData,
          filteredContents,
        };
      }

      return null;
    })
    .filter(Boolean);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredWeeks.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${
        currentPage * (100 / totalPages)
      }%)`;
    }
  }, [currentPage, totalPages]);

  return (
    <div className="relative w-full">
      <div className="flex ml-[22px] mb-[12px]">
        <p className="text-[14px]">
          <span className="font-bold">주차 별 </span>
          <span>학습 활동</span>
        </p>
        <BookIcon />
      </div>
      {filteredWeeks.length === 0 ? (
        <p className="text-center text-gray-500 text-[14px] mt-8">
          등록된 활동이 없습니다.
        </p>
      ) : (
        <>
          <div className="flex items-center justify-between w-full">
            {/* 왼쪽 화살표 */}
            {currentPage > 0 && (
              <button
                onClick={handlePrevPage}
                className="transition-opacity duration-300 hover:opacity-70 w-[50px]"
              >
                <LeftArrowIcon />
              </button>
            )}

            <div className="w-[calc(100%-80px)] overflow-hidden">
              <div
                ref={containerRef}
                className="flex space-x-4 transition-transform duration-500 ease-in-out"
                style={{ width: `${totalPages * 100}%` }}
              >
                {filteredWeeks.map((weekData) => {
                  const { filteredContents } = weekData;
                  const isHovered = hoveredWeek === weekData.week;
                  const displayContents = isHovered
                    ? filteredContents
                    : filteredContents.slice(0, 1);

                  return (
                    <div
                      key={`week-${weekData.week}`}
                      className={`
                        flex-none w-[250px] 
                        px-[24px] py-[21px] 
                        border rounded-xl relative 
                        transition-all duration-300 ease-in-out
                        mb-[30px]
                        ${isHovered ? "shadow-xl" : ""}
                        ${
                          hoveredWeek && hoveredWeek !== weekData.week
                            ? "opacity-50"
                            : "opacity-200"
                        }
                      `}
                      onMouseEnter={() => setHoveredWeek(weekData.week)}
                      onMouseLeave={() => setHoveredWeek(null)}
                    >
                      <div className="flex justify-between items-center mb-[12px]">
                        <p className="text-[14px]">
                          <span className="font-bold">{weekData.week}주차</span>
                        </p>
                        {filteredContents.length > 1 && !isHovered && (
                          <span className=" flex items-center text-[#7C8FAC] text-center font-pretendard text-[16px] not-italic font-semibold leading-[24px] border border-gray-200 px-[12px] rounded-full">
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
                        {displayContents.map((activity, index) => (
                          <div
                            key={`week-${weekData.week}-${
                              activity.code || activity.title
                            }`}
                            className={`
                              flex text-[14px] items-center justify-start 
                              p-[14px] border rounded-md mb-2 
                              transition-all duration-300 ease-in-out
                              ${
                                !activity.available
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
                              href={
                                activity.available ? activity.link : undefined
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-[8px] truncate"
                            >
                              {activity.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 오른쪽 화살표 */}
            {currentPage < totalPages - 1 && (
              <button
                onClick={handleNextPage}
                className="transition-opacity duration-300 hover:opacity-70  w-[50px]"
              >
                <RightArrowIcon />
              </button>
            )}
          </div>

          {/* 페이지 인디케이터 */}
          <div className="flex justify-center mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <div
                key={index}
                className={`
                  w-2 h-2 rounded-full mx-1 cursor-pointer
                  ${currentPage === index ? "bg-blue-500" : "bg-gray-300"}
                  transition-colors duration-300
                `}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default WeeklyActivities;
