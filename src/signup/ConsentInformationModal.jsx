import { ReactComponent as Check } from "./check.svg";
import { ReactComponent as Note } from "./proicons_note.svg";
import SchoolImage from "./image.png";

function ConsentInformationModal({ mode, onClose, onAgree }) {
  const isLoginMode = mode === "login";
  const isSignupMode = mode === "signup";

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
        {isLoginMode && (
          <div className="flex items-center py-[16px] justify-center px-[30px] bg-gray-100 rounded-xl mb-[20px] text-gray-600 gap-[10px]">
            <a
              href="https://www.acha.team/terms/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px]"
            >
              개인정보 활동 동의
              <Note />
            </a>
          </div>
        )}
        {isSignupMode && (
          <div className="flex items-center py-[16px] justify-center px-[30px] bg-gray-100 rounded-xl mb-[20px] text-gray-600 gap-[10px]">
            <a
              href="https://www.acha.team/terms/service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px]"
            >
              서비스 이용 약관
              <Note />
            </a>
          </div>
        )}
        <button
          onClick={onAgree}
          className="w-full flex items-center py-[16px] justify-center rounded-xl text-white bg-main-blue gap-[10px]"
        >
          <Check />
          동의하고 학생 인증
        </button>
      </div>
    </div>
  );
}

export default ConsentInformationModal;
