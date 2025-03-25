import { useEffect, useState } from "react";

import { ReactComponent as BookIcon } from "../assets/bookIcon.svg";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as TaskIcon } from "../assets/task.svg";
import { fetchActivityMy } from "../api/activity";

function WeeklyActivities({ courseName, activities }) {
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    const loadMyActivities = async () => {
      try {
        const myData = await fetchActivityMy();
        console.log("📌 내 활동 데이터:", myData);

        const matchingActivities = myData.contents.filter(
          (activity) => activity.courseName === courseName
        );
        console.log("📌 필터링된 활동:", matchingActivities);
        setFilteredActivities(matchingActivities);
      } catch (error) {
        console.error("내 활동 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    loadMyActivities();
  }, [courseName]);

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
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div
              key={`${activity.code}-${activity.title}`}
              className="flex-none w-[300px] px-[24px] py-[21px] border rounded-xl"
            >
              <p className="mb-[12px] text-[14px]">
                <span className="font-bold">{activity.courseName} </span>
              </p>
              <div className="flex text-[14px] items-center justify-start p-[14px] border rounded-md">
                {activity.type === "assignment" ? (
                  <TaskIcon className="w-[24px] h-[24px]" />
                ) : (
                  <MediaIcon className="w-[24px] h-[24px]" />
                )}
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-[1px]"
                >
                  {activity.title}
                </a>
              </div>
              <p className="text-[12px] text-gray-600 mt-[10px]">
                마감일: {new Date(activity.deadline).toLocaleString()}
              </p>
            </div>
          ))
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
