import { ReactComponent as DownArrow } from "./downArrow.svg";
import { ReactComponent as UpArrow } from "./upArrow.svg";
import faqData from "../mocks/faqData.json";
import { useState } from "react";

function FAQ() {
  const [openIndices, setOpenIndices] = useState({});

  const toggleAnswer = (index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className="
        flex flex-col md:flex-row justify-center gap-x-[133px]
        w-full px-6 md:px-16 lg:px-24
        my-16 md:my-28 lg:my-[200px]
        max-w-[1400px] mx-auto
      "
    >
      <div className="w-full md:w-1/4 text-center md:text-left">
        <h2 className="flex justify-start text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight mb-[20px] text-left">
          Frequently <br /> Asked <br /> Questions
        </h2>
      </div>

      <div className="flex flex-col space-y-4 md:space-y-6 w-full md:w-2/3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-[#DBDBDB] rounded-3xl transition-all duration-300 ease-in-out"
          >
            <div
              className="flex justify-between items-center cursor-pointer px-[25px] md:px-6 py-[25px] md:py-5 w-full text-[#464343]"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-[15px] font-bold">{item.question}</h3>
              <span className="ml-2 text-xl w-[30px] h-[30px]">
                {openIndices[index] ? <UpArrow /> : <DownArrow />}
              </span>
            </div>

            {openIndices[index] && (
              <div className="px-[25px] pb-[30px]">
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
