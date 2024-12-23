import { useEffect, useState } from "react";

import mockData from "../mocks/mocks.json";

function Today() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = `(${date.getMonth() + 1}.${date.getDate()})`;
    setCurrentDate(formattedDate);
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
            {mockData.lectures.map((lecture, index) => {
              const backgroundColorClass =
                lecture.dDay <= 3
                  ? "bg-red-100 text-red-500"
                  : "bg-blue-100 text-blue-700";

              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white border border-gray flex justify-between w-full"
                >
                  <div>
                    <p className="text-xs">{lecture.professor} 교수님</p>
                    <p className="font-bold">{lecture.lectureName}</p>
                    <p className="text-xs">{lecture.classroom}</p>
                  </div>
                  <div
                    className={`w-auto px-4 py-2 flex items-center justify-center text-white font-bold text-xs rounded-full ${backgroundColorClass} self-center`}
                  >
                    D-{lecture.dDay}
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
      </div>
    </div>
  );
}

export default Today;
