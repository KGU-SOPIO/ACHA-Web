import React, { createContext, useContext, useEffect, useState } from "react";

import { fetchMemberTodayLecture } from "../api/lecture";

const TodayLectureContext = createContext();

export const useTodayLecture = () => {
  return useContext(TodayLectureContext);
};

export const TodayLectureProvider = ({ children }) => {
  const [todayLecture, setTodayLecture] = useState({ contents: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getTodayLecture = async () => {
      const today = new Date();
      const dayOfWeek = today.getDay();

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        setTodayLecture({ contents: [] });
        return;
      }

      try {
        setIsLoading(true);
        console.log("오늘의 강의데이터 호출");
        const data = await fetchMemberTodayLecture();
        console.log("API 응답 데이터:", data);
        setTodayLecture(data?.contents ? data : { contents: [] });
      } catch (error) {
        console.error("오늘의 강의 조회 실패:", error);
        setError("오늘의 강의를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    getTodayLecture();
  }, []);

  return (
    <TodayLectureContext.Provider value={{ todayLecture, isLoading, error }}>
      {children}
    </TodayLectureContext.Provider>
  );
};
