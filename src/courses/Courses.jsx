import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ReactComponent as DownArrow } from "../assets/downArrowIcon.svg";
import Footer from "../components/Footer";
import { ReactComponent as LeftArrow } from "./leftArrow.svg";
import Loading01 from "../components/Loading01";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as RightArrow } from "../assets/rightArrowBlue.svg";
import { ReactComponent as TaskIcon } from "../assets/task.svg";
import { ReactComponent as UpArrow } from "../assets/upArrowIcon.svg";
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
        console.error("강좌 데이터 로딩 실패:", err);
        setError("강좌 정보를 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseData();
  }, [courseCode]);

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
    return <p className="mt-[100px]">강좌를 찾을 수 없음.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="pt-[157px] px-[346px] pb-[208px]">
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
              <h2 className="text-[24px] font-bold">{courseData.courseName}</h2>
            </div>
            <div className="flex justify-between items-center border border-main-blue rounded-2xl w-[196px] px-[20px] py-[17px]">
              <button
                className="text-main-blue"
                onClick={() => navigate(`/courses/${courseCode}/notices`)}
              >
                공지사항
              </button>
              <RightArrow className="w-[24px] h-[24px]" />
            </div>
          </div>

          {/* Weekly Activities Section */}
          <div className="max-w-6xl pb-[48px] border-b mb-[26px] mx-auto">
            <WeeklyActivities courseName={courseData.courseName} />
          </div>

          <div className="bg-[rgba(245,246,248,1)] max-w-6xl mx-auto h-[500px] rounded-xl px-[240px] py-[34px] overflow-y-auto">
            <div>
              {courseData.contents.map((activity, index) => {
                if (activity.contents.length === 0) return null;

                return (
                  <div
                    key={`week-${activity.week}-${index}`}
                    className="flex flex-col mb-[10px] bg-white rounded-xl"
                  >
                    <div className="flex items-center px-[24px] justify-between">
                      <div className="flex items-center">
                        <div className="w-[12px] h-[12px] bg-[rgba(255,78,107,1)] rounded-full"></div>
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
                      activity.contents.map((item) => (
                        <div key={item.code} className="rounded-xl">
                          <div className="flex text-[14px] items-center justify-start px-[20px] py-[23px] border-t ">
                            <div className="flex items-center">
                              {item.type === "lecture" ? (
                                <MediaIcon className="w-[24px] h-[24px]" />
                              ) : (
                                <TaskIcon className="w-[24px] h-[24px]" />
                              )}
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-[1px]"
                              >
                                {item.title}
                              </a>
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
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
