import { ClipLoader } from "react-spinners";
import React from "react";
const Loading01 = () => {
  return (
    <div className="mt-[95px]">
      <div className="flex justify-center">
        <ClipLoader color="#0066FF" />
      </div>
      <h3 className="mt-[24px] bg-blue-100 px-[21px] py-[5px] rounded-full text-main-blue">
        인증하는 중
      </h3>
    </div>
  );
};

export default Loading01;
