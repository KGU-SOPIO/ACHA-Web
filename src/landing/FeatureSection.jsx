import phoneImg from "../landing/phoneImg.png";

export default function FeatureSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between mt-[74px] mb-[100px]  md:px-[400px]">
      <div className="text-start text-center text-[#1E1E1E] ">
        <h3 className="text-[20px] md:text-[36px] font-extrabold leading-[46px] mb-[0px]">
          📅 우선 강의 & 마감 일정 관리
        </h3>
        <p className=" text-[14px] md:text-[16px] leading-[30px] text-start w-[500px]">
          <span className="font-normal">
            자동으로 사용자의 강의 일정과 과제 제출 기한을 분석하여, 우선순위가
            높은 일정을 정리해 줍니다. D-Day 표시 기능을 통해 마감일이 가까운
            과제나 시청이 필요한 강의를 쉽게 확인할 수 있으며, 일정이 임박하면
            알림을 통해 리마인드 해주기 때문에
          </span>
          <span className="font-semibold">
            {" "}
            중요한 과제를 잊어버릴 걱정이 없습니다.
          </span>
        </p>

        <div className="flex justify-start items-center gap-[9px] md:gap-[6px] mt-[13px] md:mt-[11px]">
          <p className="px-[21px] py-[2px] md:px-[12px] md:py-[5px] rounded-full border border-[#CECEEA] bg-[rgba(255,255,255,0.20)] shadow-[0px_3px_5px_rgba(67,46,134,0.05)]">
            Android
          </p>
          <p className="px-[15px] py-[2px] md:px-[12px] md:py-[5px] rounded-full border border-[#CECEEA] bg-[rgba(255,255,255,0.20)] shadow-[0px_3px_5px_rgba(67,46,134,0.05)]">
            IOS
          </p>
        </div>
      </div>

      <div className="flex justify-center md:ml-[100px]">
        <img
          src={phoneImg}
          alt="앱 화면"
          className="w-[500px] h-[333px] md:w-[1200px] md:h-[800px]"
        />
      </div>
    </div>
  );
}
