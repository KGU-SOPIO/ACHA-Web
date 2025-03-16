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
    <div className="flex justify-between w-full px-[335px] my-[200px]">
      <div className="text-[60px] font-bold text-left ">
        <h2>Frequently</h2>
        <h2>Asked</h2>
        <h2>Questions</h2>
      </div>
      <div className="flex flex-col space-y-6 w-[663px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ease-in-out border rounded-xl ${
              openIndices[index] ? "border-t" : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer bg-[rgba(252,252,252,1)] px-[16px] py-[25px] w-full"
              style={{
                borderColor: "rgba(219, 219, 219, 1)",
              }}
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-2xl font-semibold">{item.question}</h3>
              <span className="ml-2 text-xl w-[30px] h-[30px]">
                {openIndices[index] ? <AiOutlineUp /> : <AiOutlineDown />}
              </span>
            </div>

            {openIndices[index] && (
              <div
                className="overflow-hidden px-[25px] pb-[25px]"
                style={{
                  maxHeight: openIndices[index] ? "500px" : "0",
                }}
              >
                <p className="text-lg pt-4">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
