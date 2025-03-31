import Footer from "../components/Footer";
import errorIcon1 from "../error/errorIcon1.png";
import errorIcon2 from "../error/errorIcon2.png";
import { useNavigate } from "react-router-dom";

function NotFoundPage({ isLoggedIn = false }) {
  const navigate = useNavigate();

  const randomIcon = Math.random() < 0.5 ? errorIcon1 : errorIcon2;

  const handleGoHome = () => {
    const homePath = isLoggedIn ? "home" : "/";
    navigate(homePath);
  };

  return (
    <div>
      <div
        className={`flex items-center justify-center  text-center h-screen mx-auto ${
          randomIcon === errorIcon1 ? "gap-[517px]" : "gap-[289px]"
        }`}
      >
        <div className="text-start">
          <h1 className="text-[60px] font-bold ">404 Error</h1>
          <p className="text-gray-600 mb-[47px]">
            이런! 잘못된 경로입니다. 혹시 길을 잃으셨나요?
          </p>

          <button
            onClick={handleGoHome}
            className="px-[40px] py-[18px] bg-main-blue text-white rounded-md hover:bg-blue-600"
          >
            홈으로 가기
          </button>
        </div>
        <img
          src={randomIcon}
          alt="Not Found Icon"
          className={`${
            randomIcon === errorIcon1
              ? "w-[256px] h-[256px]"
              : "w-[500px] h-[500px]"
          }`}
        />
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
