import { ReactComponent as DownArrow } from "../assets/downArrowIcon.svg";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as TaskIcon } from "../assets/task.svg";
import { ReactComponent as UpArrow } from "../assets/upArrowIcon.svg";
import WeeklyActivities from "../courses/WeeklyActivities";
import mockData from "../mocks/courseMock.json";
import { useState } from "react";

function Courses() {
  const [openWeek, setOpenWeek] = useState(null);

  const toggleWeek = (weekId) => {
    setOpenWeek(openWeek === weekId ? null : weekId);
  };

  return (
    <div className="pt-[157px] px-[346px] ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-[30px] max-w-6xl">
        <div className="flex flex-col justify-start">
          <h2 className="text-[14px]">{mockData[0].prosessor}</h2>
          <h2 className="text-[24px] font-bold">{mockData[0].courseName}</h2>
        </div>
        <button className="text-main-blue border border-main-blue px-[20px] py-[17px] rounded-2xl w-[156px] ">
          공지사항
        </button>
      </div>
      {/* Weekly Activities Section */}
      <div className="max-w-6xl pb-[48px] border-b mb-[26px]">
        <WeeklyActivities />
      </div>
      <div className="bg-[rgba(245,246,248,1)] max-w-6xl h-[500px] rounded-xl px-[240px] py-[34px] overflow-y-auto">
        <div>
          {mockData[0].week.map((week) => (
            <div
              key={week.weekId}
              className="flex flex-col mb-[10px] bg-white rounded-xl"
            >
              <div className="flex items-center px-[24px] justify-between">
                <div className="flex items-center">
                  {/*강의 시청에 따라 색 다르게 조정 */}
                  <div className="w-[12px] h-[12px] bg-[rgba(255,78,107,1)] rounded-full"></div>
                  <p className="px-[8px] py-[23px] text-[14px]">
                    <span>
                      {week.weekId}주차 [{week.media[0].date}]
                      {/*임시 주차 추후에 수정해야함 */}
                    </span>
                  </p>
                </div>
                <div
                  className="cursor-pointer flex items-center"
                  onClick={() => toggleWeek(week.weekId)}
                >
                  {openWeek === week.weekId ? <UpArrow /> : <DownArrow />}
                </div>
              </div>

              {openWeek === week.weekId &&
                week.media.concat(week.task).map((item) => (
                  <div key={item.mediaId || item.taskId} className="rounded-xl">
                    <div className="flex text-[14px] items-center justify-start px-[20px] py-[23px] border-t ">
                      {item.mediaId ? (
                        <div className="flex items-center">
                          <MediaIcon className="w-[24px] h-[24px]" />
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-[1px]"
                          >
                            {item.mediaName}
                          </a>
                          <p>({item.date})</p>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <TaskIcon className="w-[24px] h-[24px]" />
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-[1px]"
                          >
                            {item.taskName}
                          </a>
                          <p>({item.date})</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
