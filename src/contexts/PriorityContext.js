import React, { createContext, useContext, useEffect, useState } from "react";

import { fetchActivityMy } from "../api/activity";

const PriorityContext = createContext();

export const usePriority = () => {
  return useContext(PriorityContext);
};

export const PriorityProvider = ({ children }) => {
  const [lectures, setLectures] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getActivities = async () => {
      try {
        setIsLoading(true);
        console.log("우선순위호출");
        const data = await fetchActivityMy();
        console.log("우선순위data:", data);
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
          .filter(
            (item) =>
              item.type === "lecture" &&
              item.available !== false &&
              item.attendance !== true
          )
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
          .filter(
            (item) =>
              item.type === "assignment" &&
              item.available !== false &&
              item.submitStatus !== "done"
          )
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

  return (
    <PriorityContext.Provider
      value={{
        lectures,
        assignments,
        isLoading,
        error,
      }}
    >
      {children}
    </PriorityContext.Provider>
  );
};
