import phoneImg from "../landing/phone_screen.png";

export default function TaskSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#F5F6F8] mt-16 mb-[100px]">
      {/* 이미지 영역 */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-[40px] ">
        <img
          src={phoneImg}
          alt="앱 화면"
          className={`
            w-[200px] h-[500px]
            sm:w-[300px] sm:h-[600px]
            md:w-[350px] md:h-[700px]
            lg:w-[393px] lg:h-[800px]
             lg:mb-0 lg:mr-[100px]
          `}
        />
      </div>

      {/* 텍스트 영역 */}
      <div className={`flex flex-col text-end max-w-[600px]`}>
        <h2 className="text-main-blue text-[24px] font-extrabold leading-[32px]">
          쉽고 빠른 과제를 수행 ✍️
        </h2>

        <p className="text-[#1E1E1E] text-[14px] md:text-[16px] font-normal leading-[24px] mt-2">
          <span>각 주차별 강의와 과제 목록을 한눈에 확인할 수 있으며, </span>
          <span className="font-semibold">강의 시험, 과제 제출,</span>
          <br />
          <span className="font-semibold">관련 자료 확인 등을</span> 한 곳에서
          관리할 수 있습니다.
          <br />
          <span>
            특히, 과제와 관련된 PDF 파일, 링크, 추가 자료 등을 함께 정리하여{" "}
          </span>
          <br />
          <span>
            불필요한 검색 없이 바로 접근할 수 있도록 구성되어 있습니다.
          </span>
        </p>

        <div className="flex flex-wrap gap-2 mt-4 justify-end lg:justify-end pb-[100px] text-[#292D34]">
          <p className="px-[14px] py-[8px] md:px-[28px] md:py-[10px] rounded-full border border-[#CECEEA] bg-[rgba(255,255,255,0.20)] shadow-[0px_3px_5px_rgba(67,46,134,0.05)]">
            강의 시청
          </p>
          <p className="px-[14px] py-[8px] md:px-[28px] md:py-[10px] rounded-full border border-[#CECEEA] bg-[rgba(255,255,255,0.20)] shadow-[0px_3px_5px_rgba(67,46,134,0.05)]">
            공지
          </p>
          <p className="px-[14px] py-[8px] md:px-[28px] md:py-[10px] rounded-full border border-[#CECEEA] bg-[rgba(255,255,255,0.20)] shadow-[0px_3px_5px_rgba(67,46,134,0.05)]">
            파일
          </p>
          <p className="px-[14px] py-[8px] md:px-[28px] md:py-[10px] rounded-full border border-[#CECEEA] bg-[rgba(255,255,255,0.20)] shadow-[0px_3px_5px_rgba(67,46,134,0.05)]">
            URL
          </p>
        </div>
      </div>
    </div>
  );
}
