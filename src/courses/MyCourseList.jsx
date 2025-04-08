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
    <div className="space-y-4">
      <div className="rounded-xl">
        <div className="text-[#1E1E1E] text-[20px] font-bold leading-[40px] flex items-center mb-[41px]">
          나의 강좌
          <LectureIcon className="bg-white" />
        </div>
        {lecture.contents.map((lecture) => {
          return (
            <div
              key={lecture.id}
              className="px-[26px] py-[16px] text-[12px] text-[#6D6D6D] font-normal text-[12px] leading-normal rounded-[20px] border-[1.5px] border-[#EDEFF2] bg-white mb-[11px] w-[340px]"
            >
              <Link to={`/courses/${lecture.code}`}>
                <p>{lecture.professor} 교수님</p>
                <p className="text-black text-[16px]">{lecture.title}</p>
                <p>{lecture.lectureRoom}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyCourseList;
