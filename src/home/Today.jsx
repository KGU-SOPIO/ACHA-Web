import { useEffect, useState } from "react";

import Loading01 from "../components/Loading01";
import { ReactComponent as QuoteLeft } from "./“left.svg";
import { ReactComponent as QuoteRight } from "./“right.svg";
import quoteData from "../mocks/quotesMocks.json";
import { useTodayLecture } from "../contexts/TodayLectureContext";

function Today() {
  const { todayLecture, isLoading, error } = useTodayLecture();
  const [randomQuote, setRandomQuote] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = `(${date.getMonth() + 1}.${date.getDate()})`;
    setCurrentDate(formattedDate);

    const randomId = Math.floor(Math.random() * quoteData.quotes.length);
    setRandomQuote(quoteData.quotes[randomId]);
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
        <p className="pb-4">
          <span>오늘의 </span>
          <span className="font-bold">강의</span>
          <span className="text-main-blue ml-2">{currentDate}</span>
        </p>
        <div className="flex">
          <div className="space-y-4 w-full">
            {todayLecture.contents.length > 0 ? (
              todayLecture.contents.map((lecture, id) => (
                <div
                  key={id}
                  className="p-4 rounded-xl bg-white border border-gray flex justify-between w-full"
                >
                  <div>
                    <p className="text-xs text-gray-700">
                      {lecture.professor} 교수님
                    </p>
                    <p className="text-black font-noto text-base font-normal leading-normal">
                      {lecture.title}
                    </p>
                    <p className="text-xs text-gray-700">
                      {lecture.lectureRoom}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">오늘의 강의가 없음</p>
            )}
          </div>
        </div>
      </div>
      <div className="p-8 rounded-xl bg-white border border-gray">
        <p>
          <span>오늘의 </span>
          <span className="font-bold">문구</span>
        </p>
        <div className="mt-4 text-main-blue text-center relative">
          <QuoteLeft className="flex absolute left-2 top-0 w-4 h-4 text-blue-500" />
          <p className="p-6 text-xl font-bold mx-4">{randomQuote}</p>
          <QuoteRight className="absolute right-2 bottom-0 w-4 h-4 text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default Today;
