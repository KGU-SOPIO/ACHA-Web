import { formatDate, getDday } from "../utils/utils";
import { useEffect, useState } from "react";

import DdayRenderer from "../home/DdayRenderer";
import { ReactComponent as LectureIcon } from "./lecture.svg";
import { ReactComponent as ListIcon } from "./list_task.svg";
import Loading01 from "../components/Loading01";
import { fetchActivityMy } from "../api/activity";

function Priority() {
  const [lectures, setLectures] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getActivities = async () => {
      try {
        setIsLoading(true);
        const data = await fetchActivityMy();
        console.log("API 응답 데이터:", data);

        const contents = data?.contents || [];

        const extractTime = (deadlineStr) => {
          if (!deadlineStr) return "23:59";

          try {
            if (deadlineStr.includes("T")) {
              return deadlineStr.split("T")[1].substring(0, 5);
            }

            const parts = deadlineStr.split(" ");
            if (parts.length > 1) {
              return parts[1].substring(0, 5);
            }

            return "23:59";
          } catch (e) {
            console.error("시간 추출 오류:", e);
            return "23:59";
          }
        };

        const processedLectures = contents
          .filter((item) => item.type === "lecture")
          .map((item) => ({
            activityCode: item.code || `lecture-${item.title}`,
            courseName: item.courseName || "",
            activityName: item.title || "",
            activityLink: item.link || "https://lms.kyonggi.ac.kr/",
            activityType: "video",
            date: item.deadline || new Date().toISOString(),
            time: extractTime(item.deadline),
            available: item.available,
          }));

        const processedAssignments = contents
          .filter((item) => item.type === "assignment")
          .map((item) => ({
            activityCode: item.code || `assignment-${item.title}`,
            courseName: item.courseName || "",
            activityName: item.title || "",
            activityLink: item.link || "https://lms.kyonggi.ac.kr/",
            activityType: "assignment",
            date: item.deadline || new Date().toISOString(),
            time: extractTime(item.deadline),
            available: item.available,
          }));

        setLectures(processedLectures);
        setAssignments(processedAssignments);
      } catch (error) {
        console.error("내 활동목록 조회 실패:", error);
        setError("내 활동목록을 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    getActivities();
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
    <div className="p-8 px-12 rounded-xl bg-white border border-gray w-full max-w-6xl mx-auto ">
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
          <div className="max-h-[600px] overflow-y-auto pr-4 ">
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
