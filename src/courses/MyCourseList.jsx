import { ReactComponent as LectureIcon } from "./class.svg";
import { Link } from "react-router-dom";
import mockData from "../mocks/courseMock.json";

function MyCourseList() {
  return (
    <div className="space-y-4 w-1/2">
      <div className="p-8 rounded-xl bg-white border border-gray">
        <div className="text-[20px] font-bold flex items-center mb-[41px]">
          나의 강좌
          <LectureIcon className="bg-white" />
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default MyCourseList;
