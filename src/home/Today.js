import { useEffect, useState } from "react";

import CourseData from "../mocks/courseMocks.json";
import { ReactComponent as QuoteLeft } from "../assets/“left.svg";
import { ReactComponent as QuoteRight } from "../assets/“right.svg";
import quoteData from "../mocks/quotesMocks.json";

function Today() {
  const [currentDate, setCurrentDate] = useState("");
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = `(${date.getMonth() + 1}.${date.getDate()})`;
    setCurrentDate(formattedDate);

    const randomIndex = Math.floor(Math.random() * quoteData.quotes.length);
    setRandomQuote(quoteData.quotes[randomIndex]);
  }, []);

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
            {CourseData.courses.map((lecture, index) => {
              const backgroundColorClass =
                lecture.dDay <= 3
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-700";

              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white border border-gray flex justify-between w-full"
                >
                  <div>
                    <p className="text-xs text-gray-700">
                      {lecture.courseCode} 교수님
                    </p>
                    <p className="font-bold">{lecture.courseName}</p>
                    <p className="text-xs text-gray-700">
                      {lecture.courseCode}
                    </p>
                  </div>
                  <div
                    className={`w-auto px-4 py-2 flex items-center justify-center text-white font-bold text-xs rounded-full ${backgroundColorClass} self-center`}
                  >
                    D-{/*lecture.dDay*/}10
                  </div>
                </div>
              );
            })}
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
