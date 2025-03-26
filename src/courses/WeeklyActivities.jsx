import { ReactComponent as BookIcon } from "../assets/bookIcon.svg";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as TaskIcon } from "../assets/task.svg";

function WeeklyActivities({ contents }) {
  console.log("활동: ", contents);

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
          filteredWeeks.map((weekData) => (
            <div
              key={`week-${weekData.week}`}
              className="flex-none w-[300px] px-[24px] py-[21px] border rounded-xl"
            >
              <p className="mb-[12px] text-[14px]">
                <span className="font-bold">{weekData.week}주차</span>
              </p>
              {weekData.contents.length > 0 ? (
                weekData.contents
                  .filter(
                    (activity) =>
                      activity.type === "assignment" ||
                      activity.type === "lecture"
                  )
                  .map((activity) => (
                    <div
                      key={`week-${weekData.week}-${
                        activity.code || activity.title
                      }`}
                      className={`flex text-[14px] items-center justify-start p-[14px] border rounded-md mb-2 ${
                        !(activity.available && activity.link)
                          ? "bg-gray-100 cursor-not-allowed text-gray-400"
                          : ""
                      }`}
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
                        {activity.title} (
                        {activity.type === "assignment" ? "과제" : "강의"})
                      </a>
                    </div>
                  ))
              ) : (
                <p className="text-gray-500 text-[14px]">
                  등록된 학습 활동이 없습니다.
                </p>
              )}
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
