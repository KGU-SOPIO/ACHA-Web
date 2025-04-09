import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ReactComponent as BookIcon } from "./book_no_lecture.svg";
import { ReactComponent as DownArrow } from "../assets/downArrowIcon.svg";
import { ReactComponent as FileIcon } from "./fileIcon.svg";
import Footer from "../components/Footer";
import { ReactComponent as LeftArrow } from "./leftArrow.svg";
import { ReactComponent as LinkIcon } from "./linkIcon.svg";
import Loading01 from "../components/Loading01";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as RightArrow } from "./rightArrowBlue.svg";
import { ReactComponent as TaskIcon } from "./taskIcon.svg";
import { ReactComponent as UpArrow } from "./upArrowIcon.svg";
import WeeklyActivities from "./WeeklyActivities";
import { fetchCourseActivities } from "../api/activity";

function Courses() {
  const { courseCode } = useParams();

  const [openWeek, setOpenWeek] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseData = async () => {
      if (!courseCode) return;

      try {
        setIsLoading(true);
        const data = await fetchCourseActivities(courseCode);
        setCourseData(data);
      } catch (err) {
        setError("강좌 정보를 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseData();
  }, [courseCode]);

  const getWeekStatusColor = (contents) => {
    for (const item of contents) {
      if (item.type === "lecture" && !item.attendance)
        return "bg-[rgba(255,78,107,1)]";
      if (item.type === "assignment" && item.available) {
        if (item.submitStatus === "none") return "bg-[rgba(255,78,107,1)]";
        if (item.submitStatus === "miss") return "bg-gray-400";
        if (item.submitStatus === "late") return "bg-orange-400";
      }
    }
    return "bg-main-blue"; // 모든 항목이 완료된 상태
  };

  const hasActivity = courseData?.contents?.some(
    (activity) => activity.contents.length > 0
  );

  const toggleWeek = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading01 />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!courseData) {
    return <p className="mt-[100px] text-center">강좌를 찾을 수 없음.</p>;
  }

  return (
    <div className="min-h-[calc(100vh+200px)] flex flex-col">
      <div className="flex-grow">
        <div className="pt-[147px] px-[20px] sm:px-[60px} md:px-[200px] lg:px-[100px] xl:px-[346px] pb-[208px]">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-[30px] max-w-6xl mx-auto">
            <div className="flex flex-col justify-start">
              <button
                onClick={() => navigate(`/courses/`)}
                className="flex items-center mb-[20px]"
              >
                <LeftArrow className="w-[24px] h-[24px] mr-[8px]" />
              </button>
              <h2 className="text-[14px]">{courseData.professor} 교수님</h2>
              <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold">
                {courseData.courseName}
              </h2>
            </div>
            <div
              className={`flex justify-between items-center border ${
                hasActivity ? "border-main-blue" : "border-gray-300"
              } rounded-2xl w-[160px] sm:w-[180px] md:w-[196px] px-[12px] sm:px-[18px] py-[10px] sm:py-[14px]`}
            >
              <button
                className={`${
                  hasActivity
                    ? "text-main-blue cursor-pointer"
                    : "text-gray-400 cursor-not-allowed"
                } text-[12px] sm:text-[14px]`}
                onClick={() =>
                  hasActivity
                    ? navigate(`/courses/${courseCode}/notices`)
                    : null
                }
                disabled={!hasActivity}
              >
                공지사항
              </button>
              <RightArrow
                className={`w-[24px] h-[24px] ${
                  hasActivity ? "text-main-blue" : "text-gray-400"
                }`}
              />
            </div>
          </div>

          {/* Weekly Activities Section */}
          <div className="max-w-full sm:max-w-3xl md:max-w-6xl  pb-[28px] border-b mb-[26px] mx-auto">
            <WeeklyActivities contents={courseData.contents} />
          </div>

          <div className="bg-[rgba(245,246,248,1)] max-w-full sm:max-w-3xl md:max-w-6xl  mx-auto h-auto sm:h-[800px] md:h-[700px] rounded-[30px] py-[34px] overflow-y-auto px-[20px] md:px-[100px] lg:px-[140px] xl:px-[180px]">
            <div>
              {courseData.contents.every(
                (activity) => activity.contents.length === 0
              ) ? (
                <div className="flex flex-col items-center my-[100px]">
                  <div className="bg-white p-[14px] rounded-full mb-2">
                    <BookIcon />
                  </div>
                  <p className="text-[#6D6D6D] text-center font-bold text-[20px] leading-[28px] mt-[25px]">
                    강의 / 과제 없음
                  </p>
                  <p className="text-[#B5AFAF] text-center font-normal text-[16px] leading-[28px] mt-[22px]">
                    새 강의와 과제를 기다리고 있어요
                  </p>
                </div>
              ) : (
                courseData.contents.map((activity, index) => {
                  if (activity.contents.length === 0) return null;

                  return (
                    <div
                      key={`week-${activity.week}-${index}`}
                      className="flex flex-col mb-[10px] bg-white rounded-xl"
                    >
                      <div className="flex items-center px-[24px] justify-between">
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full ${getWeekStatusColor(
                              activity.contents
                            )}`}
                          ></div>

                          <p className="px-[8px] py-[23px] text-[14px]">
                            <span>{activity.week}주차</span>
                          </p>
                        </div>
                        <div
                          className="cursor-pointer flex items-center"
                          onClick={() => toggleWeek(activity.week)}
                        >
                          {openWeek === activity.week ? (
                            <UpArrow />
                          ) : (
                            <DownArrow />
                          )}
                        </div>
                      </div>

                      {openWeek === activity.week &&
                        activity.contents.map((item, idx) => {
                          const isLastItem =
                            idx === activity.contents.length - 1;
                          return (
                            <div
                              key={item.code}
                              className={`${
                                !item.available
                                  ? "text-gray-400 cursor-not-allowed"
                                  : "bg-white"
                              } ${
                                isLastItem
                                  ? "rounded-bl-[30px] rounded-br-[30px]"
                                  : ""
                              }`}
                            >
                              <div className="flex text-[14px] items-center justify-start px-[20px] py-[23px] border-t">
                                <div className="flex items-center">
                                  {item.type === "lecture" ? (
                                    <MediaIcon className="w-[24px] h-[24px]" />
                                  ) : item.type === "assignment" ? (
                                    <TaskIcon className="w-[24px] h-[24px]" />
                                  ) : item.type === "file" ? (
                                    <FileIcon className="w-[24px] h-[24px]" />
                                  ) : item.type === "url" ? (
                                    <LinkIcon className="w-[24px] h-[24px]" />
                                  ) : null}
                                  {item.available ? (
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="ml-[7px] text-black"
                                    >
                                      {item.title}
                                    </a>
                                  ) : (
                                    <span className="ml-[7px]">
                                      {item.title} (사용 불가)
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
