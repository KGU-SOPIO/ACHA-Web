import { createContext, useContext, useEffect, useState } from "react";

import { fetchMemberLecture } from "../api/lecture";

const LectureContext = createContext();

export function LectureProvider({ children }) {
  const [lecture, setLecture] = useState({ contents: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getLecture = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMemberLecture();
        setLecture(data?.contents ? data : { contents: [] });
      } catch (error) {
        setError("나의 강좌를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    getLecture();
  }, []);

  return (
    <LectureContext.Provider value={{ lecture, isLoading, error }}>
      {children}
    </LectureContext.Provider>
  );
}

export function useLecture() {
  return useContext(LectureContext);
}
