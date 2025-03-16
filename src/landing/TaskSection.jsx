import phoneImg from "../landing/phone_screen.png";

export default function TaskSection() {
  return (
    <div className="flex items-center justify-center bg-gray-100 mt-16 mb-[100px]">
      <img
        src={phoneImg}
        alt="앱 화면"
        className="w-[450px] h-[900px] mr-[300px]"
      />

      <div className="flex flex-col">
        <h2 className="text-main-blue text-end font-pretendard text-[36px] font-extrabold leading-[46px]">
          쉽고 빠른 과제를 수행 ✍️
        </h2>

        <p className="text-[#1E1E1E] text-end font-pretendard text-[16px] font-normal leading-[30px]">
          <span>각 주차별 강의와 과제 목록을 한눈에 확인할 수 있으며, </span>
          <span className="text-[#1E1E1E] font-pretendard text-[16px] font-semibold leading-[30px] text-right">
            강의 시험, 과제 제출,
          </span>
          <br />
          <span className="text-[#1E1E1E] font-pretendard text-[16px] font-semibold leading-[30px] text-right">
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
          <div className="flex gap-2 mt-4 justify-end">
            <p className="text-gray-700 px-[15px] py-[5px] rounded-full border-gray-300 border-[1px]">
              강의 시청
            </p>
            <p className="text-gray-700 px-[15px] py-[5px] rounded-full border-gray-300 border-[1px]">
              공지
            </p>
            <p className="text-gray-700 px-[15px] py-[5px] rounded-full border-gray-300 border-[1px]">
              파일
            </p>
            <p className="text-gray-700 px-[15px] py-[5px] rounded-full border-gray-300 border-[1px]">
              PDF
            </p>
          </div>
        </p>
      </div>
    </div>
  );
}
