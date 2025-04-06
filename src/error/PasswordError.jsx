import { ReactComponent as HandIcon } from "../login/handIcon.svg";
import { ReactComponent as KutisIcon } from "../login/kutis.svg";
import { ReactComponent as MenualIcon } from "../login/menual.svg";
import { ReactComponent as PasswordStarIcon } from "../login/password_star.svg";
import { ReactComponent as RetryIcon } from "../login/retry.svg";
import { useNavigate } from "react-router-dom";

function PasswordError() {
  const navigate = useNavigate();

  const handleGoLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-[324px] mx-auto py-12">
        <HandIcon className="w-[40px]" />

        <h1 className="text-[20px] font-bold my-[17px]">잠시만요!</h1>
        <p className="text-[14px] text-gray-600 mb-[40px]">
          비밀번호를 변경해주세요
        </p>

        <div className="border border-gray-300 rounded-3xl p-[20px]">
          <p className="flex bg-gray-100 px-[30px] py-[11px] rounded-full items-center justify-center">
            <span className="text-[#6D6D6D] font-['Noto_Sans_KR'] text-[16px] font-bold leading-normal">
              비밀번호
            </span>
            <span className="text-[#6D6D6D] font-['Noto_Sans_KR'] text-[16px] font-normal leading-normal">
              를 어떻게 바꾸나요?
            </span>
            <PasswordStarIcon className="w-[40px]" />
          </p>

          <p className="mt-[15px]">
            <span className="text-[#1E1E1E] font-['Noto_Sans_KR'] text-[16px] font-medium leading-[32px]">
              1&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-[#7D7D7D] font-['Noto_Sans_KR'] text-[16px] font-normal leading-[32px]">
              쿠티스에 접속하여
            </span>
            <br />
            <span className="text-[#06F] font-['Noto_Sans_KR'] text-[16px] font-medium leading-[32px]">
              &nbsp;&nbsp;&nbsp;&nbsp;‘본인인증으로 비밀번호 초기화’
            </span>
            <span className="text-[#7D7D7D] font-['Noto_Sans_KR'] text-[16px] font-normal leading-[32px]">
              &nbsp;선택
            </span>
          </p>

          <p>
            <span className="text-[#1E1E1E] font-['Noto_Sans_KR'] text-[16px] font-medium leading-[32px]">
              2&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-[#7D7D7D] font-['Noto_Sans_KR'] text-[16px] font-normal leading-[32px]">
              비밀번호 초기화 후 쿠티스에&nbsp;
            </span>
            <span className="text-[#06F] font-['Noto_Sans_KR'] text-[16px] font-bold leading-[32px]">
              로그인
            </span>
          </p>

          <p className="mb-[19px]">
            <span className="text-[#1E1E1E] font-['Noto_Sans_KR'] text-[16px] font-medium leading-[32px]">
              3&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-[#7D7D7D] font-['Noto_Sans_KR'] text-[16px] font-normal leading-[32px]">
              쿠티스 안내에 따라&nbsp;
            </span>
            <span className="text-[#06F] font-['Noto_Sans_KR'] text-[16px] font-bold leading-[32px]">
              비밀번호 변경
            </span>
          </p>
          <div className="flex items-center py-[16px] justify-center px-[30px] border border-gray-300 rounded-full mb-[20px] text-gray-600 gap-[10px]">
            <a
              href="https://www.acha.team/manuals/password"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px]"
            >
              <MenualIcon />
              메뉴얼 확인하기
            </a>
          </div>
        </div>

        <div className="w-full bg-main-blue hover:bg-blue-700 text-white font-bold py-[16px] rounded-xl focus:outline-none focus:shadow-outline mt-[34px]">
          <a
            href="https://kutis.kyonggi.ac.kr/webkutis/view/indexWeb.jsp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center"
          >
            <KutisIcon className="w-[40px]" />
            쿠티스로 이동
          </a>
        </div>
        <button
          onClick={handleGoLogin}
          className="w-full bg-gray-200 hover:bg-gray-300 text-white font-bold py-[16px] mb-[56px] mt-[17px] rounded-xl focus:outline-none focus:shadow-outline"
        >
          <div className="flex w-full items-center justify-center text-[#7888B2] text-center font-['Noto_Sans_KR'] text-[16px] font-medium leading-normal">
            <RetryIcon className="w-[40px]" />
            재시도
          </div>
        </button>

        <div className="flex flex-col items-center mb-[34px] text-[15Px]">
          <div className="space-x-[30px]">
            <a
              href="https://www.acha.team/terms/service"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              이용약관
            </a>
            <a
              href="https://www.acha.team/terms/service/privacy"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              개인정보처리방침
            </a>
          </div>
        </div>
        <p className="text-center text-gray-400">
          COPYRIGHT ⓒ 2025.ACHA ALL RIGHTS RESERVED.
        </p>
      </main>
    </div>
  );
}

export default PasswordError;
