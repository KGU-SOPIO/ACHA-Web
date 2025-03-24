import phoneImg from "../landing/phone_screen.png";

export default function TaskSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 mt-16 mb-[100px] px-4 sm:px-8 lg:px-16">
      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src={phoneImg}
          alt="앱 화면"
          className="w-[450px] h-[900px] sm:w-[300px] sm:h-[600px] lg:mr-[100px] mb-6 lg:mb-0"
        />
      </div>

      <div className="flex flex-col text-center lg:text-end max-w-[600px]">
        <h2 className="text-main-blue font-pretendard text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold leading-[32px] sm:leading-[40px] lg:leading-[46px]">
          쉽고 빠른 과제를 수행 ✍️
        </h2>

        <p className="text-[#1E1E1E] font-pretendard text-[14px] sm:text-[16px] font-normal leading-[24px] sm:leading-[30px]">
          <span>각 주차별 강의와 과제 목록을 한눈에 확인할 수 있으며, </span>
          <span className="text-[#1E1E1E] font-pretendard font-semibold">
            강의 시험, 과제 제출,
          </span>
          <br />
          <span className="text-[#1E1E1E] font-pretendard font-semibold">
            관련 자료 확인 등을 한 곳에서 관리할 수 있습니다.
          </span>
          <br />
          <span>
            특히, 과제와 관련된 PDF 파일, 링크, 추가 자료 등을 함께 정리하여
            사용자가{" "}
          </span>
          <br />
          <span>
            불필요한 검색 없이 바로 접근할 수 있도록 구성되어 있습니다.
          </span>
        </p>

        <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-end pb-[100px]">
          <p className="text-gray-700 text-sm sm:text-base px-4 py-2 rounded-full border-gray-300 border">
            강의 시청
          </p>
          <p className="text-gray-700 text-sm sm:text-base px-4 py-2 rounded-full border-gray-300 border">
            공지
          </p>
          <p className="text-gray-700 text-sm sm:text-base px-4 py-2 rounded-full border-gray-300 border">
            파일
          </p>
          <p className="text-gray-700 text-sm sm:text-base px-4 py-2 rounded-full border-gray-300 border">
            PDF
          </p>
        </div>
      </div>
    </div>
  );
}
