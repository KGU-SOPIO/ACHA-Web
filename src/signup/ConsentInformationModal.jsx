import { ReactComponent as Check } from "./check.svg";
import { ReactComponent as Note } from "./proicons_note.svg";
import SchoolImage from "./image.png";
import { useState } from "react";

function ConsentInformationModal({ onClose, onAgree }) {
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeService, setAgreeService] = useState(false);

  const isAllAgreed = agreePrivacy && agreeService;

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 pointer-events-auto text-[16px]">
      <div className="absolute inset-0 " onClick={onClose}></div>
      <div className="relative w-full bg-white  max-w-[400px] px-[25px] py-[40px] rounded-3xl border border-gray-100 shadow-md text-start">
        <div className="flex items-center justify-between bg-white rounded-md gap-[73px] mb-[30px]">
          <div>
            <p>
              <span className="font-bold">학생 인증</span>
              <span>을 위해</span>
            </p>
            <p>경기대학교에 로그인합니다</p>
          </div>
          <div>
            <img src={SchoolImage} alt="School Logo" />
          </div>
        </div>
        <div className="flex items-center py-[16px] justify-between px-[30px] bg-gray-100 rounded-xl mb-[20px] text-gray-600 gap-[10px]">
          <a
            href="https://www.acha.team/terms/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px]"
          >
            개인정보 활동 동의
            <Note />
          </a>
          <input
            type="checkbox"
            checked={agreePrivacy}
            onChange={() => setAgreePrivacy(!agreePrivacy)}
            className="w-[20px] h-[20px] accent-main-blue"
          />
        </div>
        <div className="flex items-center py-[16px] justify-between px-[30px] bg-gray-100 rounded-xl mb-[20px] text-gray-600 gap-[10px]">
          <a
            href="https://www.acha.team/terms/service"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px]"
          >
            서비스 이용 약관
            <Note />
          </a>
          <input
            type="checkbox"
            checked={agreeService}
            onChange={() => setAgreeService(!agreeService)}
            className="w-[20px] h-[20px] accent-main-blue"
          />
        </div>
        <button
          onClick={onAgree}
          disabled={!isAllAgreed}
          className={`w-full flex items-center py-[16px] justify-center rounded-xl text-white gap-[10px] ${
            isAllAgreed ? "bg-main-blue" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          <Check />
          동의하고 학생 인증
        </button>
      </div>
    </div>
  );
}

export default ConsentInformationModal;
