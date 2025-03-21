import { ReactComponent as BookIcon } from "../assets/bookIcon.svg";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as TaskIcon } from "../assets/task.svg";

function WeeklyActivities({ activities }) {
  const sortedWeeks = [...activities].sort(
    (a, b) => a.activityCode - b.activityCode
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
        {sortedWeeks.map((activity) => {
          // lectures와 assignment 모두 없으면 빈 배열로 처리
          const activityItems = [
            ...(activity.lectures || []),
            ...(activity.assignment || []),
          ];

          // 활동이 없는 경우 렌더링하지 않음
          if (activityItems.length === 0) {
            return null;
          }

          return (
            <div key={activity.activityCode} className="flex space-x-4">
              {activityItems.map((item) => (
                <div
                  key={item.activityCode}
                  className="flex-none w-[300px] px-[24px] py-[21px] border rounded-xl"
                >
                  <p className="mb-[12px] text-[14px]">
                    <span className="font-bold">{activity.week}주차 </span>
                    <span> [{item.date}]</span>
                  </p>

                  <div className="flex text-[14px] items-center justify-start p-[14px] border rounded-md">
                    {item.activityType === "video" ? (
                      <>
                        <MediaIcon className="w-[24px] h-[24px]" />
                        <a
                          href={item.activityLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-[1px]"
                        >
                          {item.activityName}
                        </a>
                      </>
                    ) : (
                      <>
                        <TaskIcon className="w-[24px] h-[24px]" />
                        <a
                          href={item.activityLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-[1px]"
                        >
                          {item.activityName}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WeeklyActivities;
