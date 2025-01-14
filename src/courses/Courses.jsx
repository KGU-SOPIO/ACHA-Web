import { ReactComponent as DownArrow } from "../assets/downArrowIcon.svg";
import Footer from "../components/Footer";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as RightArrow } from "../assets/rightArrowBlue.svg";
import { ReactComponent as TaskIcon } from "../assets/task.svg";
import { ReactComponent as UpArrow } from "../assets/upArrowIcon.svg";
import WeeklyActivities from "./WeeklyActivities";
import mockData from "../mocks/courseMock.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Courses() {
  const { courseCode } = useParams();
  const [openWeek, setOpenWeek] = useState(null);
  const courseData = mockData.find(
    (course) => course.courseCode === Number(courseCode)
  );
  if (!courseData) {
    return <p className="mt-[100px]">강좌를 찾을 수 없음.</p>;
  }

  const toggleWeek = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  return (
    <div>
      <div className="pt-[157px] px-[346px] pb-[208px]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-[30px] max-w-6xl mx-auto">
          <div className="flex flex-col justify-start">
            <h2 className="text-[14px]">{courseData.prosessor}</h2>
            <h2 className="text-[24px] font-bold">{courseData.courseName}</h2>
          </div>
          <div className="flex justify-between items-center border border-main-blue rounded-2xl w-[196px] px-[20px] py-[17px]">
            <button className="text-main-blue ">공지사항</button>
            <RightArrow className="w-[24px] h-[24px]" />
          </div>
        </div>
        {/* Weekly Activities Section */}
        <div className="max-w-6xl pb-[48px] border-b mb-[26px] mx-auto">
          <WeeklyActivities activities={courseData.activities} />
        </div>
        <div className="bg-[rgba(245,246,248,1)] max-w-6xl mx-auto h-[500px] rounded-xl px-[240px] py-[34px] overflow-y-auto">
          <div>
            {courseData.activities.map((activity) => {
              const activityItems = [
                ...(activity.lectures || []),
                ...(activity.assignment || []),
              ];

              if (activityItems.length === 0) return null;

              const firstItem = activityItems[0];

              return (
                <div
                  key={activity.activityCode}
                  className="flex flex-col mb-[10px] bg-white rounded-xl"
                >
                  <div className="flex items-center px-[24px] justify-between">
                    <div className="flex items-center">
                      {/*강의 시청에 따라 색 다르게 조정 */}
                      <div className="w-[12px] h-[12px] bg-[rgba(255,78,107,1)] rounded-full"></div>
                      <p className="px-[8px] py-[23px] text-[14px]">
                        <span>
                          {activity.week}주차 [{firstItem.date}]
                          {/*임시 주차 추후에 수정해야함 */}
                        </span>
                      </p>
                    </div>
                    <div
                      className="cursor-pointer flex items-center"
                      onClick={() => toggleWeek(activity.week)}
                    >
                      {openWeek === activity.week ? <UpArrow /> : <DownArrow />}
                    </div>
                  </div>

                  {openWeek === activity.week &&
                    activityItems.map((item) => (
                      <div
                        key={`${activity.activityCode}-${item.activityType}-${item.activityCode}`}
                        className="rounded-xl"
                      >
                        <div className="flex text-[14px] items-center justify-start px-[20px] py-[23px] border-t ">
                          <div className="flex items-center">
                            {item.activityType === "video" ? (
                              <MediaIcon className="w-[24px] h-[24px]" />
                            ) : (
                              <TaskIcon className="w-[24px] h-[24px]" />
                            )}
                            <a
                              href={item.activityLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-[1px]"
                            >
                              {item.activityName}
                            </a>
                            <p>({item.date})</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
