import phoneImg from "../landing/phoneImg.png";

export default function FeatureSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-16 mb-[100px] px-4">
      <div className="text-left lg:ml-[100px] text-center lg:text-left">
        <h3 className="text-[#1E1E1E] font-pretendard text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[46px] mb-[20px]">
          📅 우선 강의 & 마감 일정 관리
        </h3>
        <p className="text-[#1E1E1E] font-pretendard text-[14px] sm:text-[16px] leading-[24px] sm:leading-[30px]">
          <span className="font-normal">
            자동으로 사용자의 강의 일정과 과제 제출 기한을 분석하여, 우선순위가
            <br className="hidden sm:block" />
            높은 일정을 정리해 줍니다. D-Day 표시 기능을 통해 마감일이 가까운
            <br className="hidden sm:block" />
            과제나 시청이 필요한 강의를 쉽게 확인할 수 있으며, 일정이 임박하면
            <br className="hidden sm:block" />
            알림을 통해 리마인드 해주기 때문에
          </span>
          <span className="font-semibold">
            {" "}
            중요한 과제를 잊어버릴 걱정이 없습니다.
          </span>
        </p>

        <div className="flex justify-center lg:justify-start gap-2 mt-4">
          <p className="text-gray-700 px-[15px] py-[5px] rounded-full border-gray-300 border-[1px]">
            Android
          </p>
          <p className="text-gray-700 px-[15px] py-[5px] rounded-full border-gray-300 border-[1px]">
            IOS
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src={phoneImg}
          alt="앱 화면"
          className="w-[80%] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto"
        />
      </div>
    </div>
  );
}
