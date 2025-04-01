import { formatDate, getDday } from "../utils/utils";

import DdayRenderer from "../home/DdayRenderer";
import { ReactComponent as LectureIcon } from "./lecture.svg";
import { ReactComponent as ListIcon } from "./list_task.svg";
import Loading01 from "../components/Loading01";
import { usePriority } from "../contexts/PriorityContext";

function Priority() {
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
    <div className="p-8 px-12 rounded-xl bg-white border border-gray w-full max-w-6xl mx-auto">
      <div className="flex h-full">
        {/* 우선순위 강의 */}
        <div className="w-1/2 pr-4 h-full space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="flex text-lg font-bold items-center">
                나의 우선강의
              </h2>
              <LectureIcon className="flex items center w-4 h-4" />
            </div>
          </div>
          <div className="max-h-[600px] overflow-y-auto pr-4">
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
            <div className="flex items-center gap-2">
              <h2 className="flex text-lg font-bold items-center">
                나의 우선과제
              </h2>
              <ListIcon className="flex items center w-4 h-4" />
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
