import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useEffect, useState } from "react";

import faqData from "../mocks/faqData.json";

function FAQ() {
  const [openIndices, setOpenIndices] = useState({});

  const toggleAnswer = (index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-x-16 w-full px-6 md:px-16 lg:px-24 my-16 md:my-28 lg:my-[200px] max-w-[1100px] mx-auto">
      {/* 타이틀 (비율 조정) */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight mb-[20px]">
          Frequently <br /> Asked <br /> Questions
        </h2>
      </div>

      {/* FAQ 리스트 (비율 조정) */}
      <div className="flex flex-col space-y-4 md:space-y-6 w-full md:w-2/3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl transition-all duration-300 ease-in-out"
          >
            {/* 질문 */}
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-50 px-4 md:px-6 py-4 md:py-5 w-full border-b"
              style={{ borderColor: "rgba(219, 219, 219, 1)" }}
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
              <div className="overflow-hidden px-4 md:px-6 pb-4 md:pb-6">
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
