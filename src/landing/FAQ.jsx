import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useEffect, useState } from "react";

import faqData from "../mocks/faqData.json";

function FAQ() {
  const [data, setData] = useState([]);
  const [openIndices, setOpenIndices] = useState({});

  const toggleAnswer = (index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    setData(faqData);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between w-full px-6 md:px-16 lg:px-[335px] my-16 md:my-28 lg:my-[200px]">
      {/* 타이틀 */}
      <div className="text-4xl md:text-5xl lg:text-[60px] font-bold text-left mb-8 md:mb-12 lg:mb-0">
        <h2>Frequently</h2>
        <h2>Asked</h2>
        <h2>Questions</h2>
      </div>

      {/* FAQ 리스트 */}
      <div className="flex flex-col space-y-4 md:space-y-6 w-full md:w-[500px] lg:w-[663px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ease-in-out border rounded-xl ${
              openIndices[index] ? "border-t" : ""
            }`}
          >
            {/* 질문 */}
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-50 px-4 md:px-6 py-4 md:py-5 w-full"
              style={{
                borderColor: "rgba(219, 219, 219, 1)",
              }}
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {item.question}
              </h3>
              <span className="ml-2 text-xl w-[30px] h-[30px]">
                {openIndices[index] ? <AiOutlineUp /> : <AiOutlineDown />}
              </span>
            </div>

            {/* 답변 */}
            {openIndices[index] && (
              <div
                className="overflow-hidden px-4 md:px-6 pb-4 md:pb-6"
                style={{
                  maxHeight: openIndices[index] ? "500px" : "0",
                }}
              >
                <p className="text-base md:text-lg pt-2 md:pt-4">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
