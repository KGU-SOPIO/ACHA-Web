import { ReactComponent as LectureIcon } from "./iconoir_book.svg";
import { Link } from "react-router-dom";
import Loading01 from "../components/Loading01";
import { useLecture } from "../hooks/useLecture";

function MyCourseList() {
  const { lecture, isLoading, error } = useLecture();

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
          {lecture.contents.map((lecture) => {
            return (
              <div
                key={lecture.id}
                className="px-[26px] py-[16px] text-[12px] text-gray-500 border-[1.5px] border-gray-200 rounded-2xl mb-[11px]"
              >
                <Link to={`/courses/${lecture.code}`}>
                  <p>{lecture.professor} 교수님</p>
                  <p className="text-[16px] text-black">{lecture.title}</p>
                  <p>{lecture.lectureRoom}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyCourseList;
