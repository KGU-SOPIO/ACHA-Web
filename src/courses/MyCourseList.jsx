import { useEffect, useState } from "react";

import { ReactComponent as LectureIcon } from "./class.svg";
import { Link } from "react-router-dom";
import Loading01 from "../components/Loading01";
import { fetchMemberLecture } from "../api/lecture";
import mockData from "../mocks/courseMock.json";

function MyCourseList() {
  const [lecture, setLecture] = useState({ contents: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getLecture = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMemberLecture();
        console.log("API 응답 데이터:", data);
        setLecture(data?.contents ? data : { contents: [] });
      } catch (error) {
        console.error("나의 강좌 조회 실패:", error);
        setError("나의 강좌를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    getLecture();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loading01 />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 px-12 max-w-6xl mx-auto rounded-lg bg-white">
        <div className="text-red-500 text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-4 w-1/2">
      <div className="p-8 rounded-xl bg-white border border-gray">
        <div className="text-[20px] font-bold flex items-center mb-[41px]">
          나의 강좌
          <LectureIcon className="bg-white" />
        </div>
        <div>
          {/*예시 데이터 */}
          {mockData.map((course) => (
            <div
              className="px-[26px] py-[16px] text-[12px] text-gray-500 border-[1.5px] border-gray-200 rounded-2xl mb-[11px]"
              key={course.courseCode}
            >
              <Link to={`/courses/${course.courseCode}`}>
                <p>{course.prosessor} 교수님</p>
                <p className="text-[16px] text-black">{course.courseName}</p>
                <p>{course.lectureRoom}</p>
              </Link>
            </div>
          ))}

          {/*실제 데이터 */}
          {lecture.contents.length > 0 ? (
            lecture.contents.map((lecture, id) => (
              <div
                key={id}
                className="px-[26px] py-[16px] text-[12px] text-gray-500 border-[1.5px] border-gray-200 rounded-2xl mb-[11px]"
              >
                <Link to={`/courses/${lecture.code}`}>
                  <p>{lecture.professor} 교수님</p>
                  <p className="text-[16px] text-black">{lecture.title}</p>
                  <p>{lecture.lectureRoom}</p>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">오늘의 강의가 없음</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCourseList;
