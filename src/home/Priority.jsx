import { formatDate, getDday } from "../utils/utils";

import DdayRenderer from "../home/DdayRenderer";
import { ReactComponent as LectureIcon } from "./lecture.svg";
import { ReactComponent as ListIcon } from "./list_task.svg";
import Loading01 from "../components/Loading01";
import { usePriority } from "../contexts/PriorityContext";

function Priority({ className = "" }) {
  const { lectures, assignments, isLoading, error } = usePriority();

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
    <div
      className={`pl-[44px] pr-[40px] pt-[43px] pb-[55px] rounded-[20px] border border-[#E4E8F1] bg-white w-full max-w-6xl mx-auto ${className}`}
    >
      <div className="flex h-full">
        {/* 우선순위 강의 */}
        <div className="w-1/2 pr-4 h-full space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
              <p className="text-[#1E1E1E] text-[16px] leading-[20px]">
                <span className="font-medium">나의 </span>
                <span className="font-bold">우선강의</span>
              </p>
              <LectureIcon className="w-[14px] h-[14px]" />
            </div>
          </div>
          <div className="max-h-[650px] overflow-y-auto mr-[7px]">
            <DdayRenderer
              items={lectures}
              getDday={getDday}
              formatDate={formatDate}
            />
          </div>
        </div>

        {/* 우선순위 과제 */}
        <div className="w-1/2 pl-4 h-full space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
              <p className="text-[#1E1E1E] text-[16px] leading-[20px]">
                <span className="font-medium">나의 </span>
                <span className="font-bold">우선강의</span>
              </p>
              <ListIcon className="w-[16px] h-[16px]" />
            </div>
          </div>
          <div className="max-h-[600px] overflow-y-auto pr-4">
            <DdayRenderer
              items={assignments}
              getDday={getDday}
              formatDate={formatDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Priority;
