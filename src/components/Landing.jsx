import FAQ from "../landing/FAQ";
import FeatureSection from "../landing/FeatureSection";
import Footer from "./Footer";
import ImageSlide from "../landing/ImageSlide";
import LendingImg2 from "../assets/lending2.png";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";
import TaskSection from "../landing/TaskSection";
import appleLogo from "../landing/Apple_logo_black 1.svg";
import calendarImg from "../landing/calender.svg";
import playStoreLogo from "../landing/Google_Play_icon.svg 1.png";

function Landing() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Logo className="w-[70px] h-[70px] mt-[186px]" />

        <img
          src={calendarImg}
          alt="캘린더 이미지"
          className="absolute top-[-50px] right-[-400px] w-[700px] h-auto -rotate-[25deg]"
        />
        <h1 className="text-main-blue text-center font-pretendard text-[100px] font-extrabold leading-[71px] tracking-[-0.5px] py-[34px]">
          ACHA!
        </h1>
        <p className="text-gray-600 text-lg text-center">
          <span className="text-main-blue text-center font-pretendard text-[20px] font-extrabold leading-[32px]">
            ‘해야지’{" "}
          </span>
          <span className="text-[#24223E] font-pretendard text-[20px] font-bold leading-[32px]">
            하고, 잊어버리시진 않았나요?
          </span>
          <br />
          <div className="flex items-center justify-center">
            다가올 마감일 놓치지 마세요!
            <img src={LendingImg2} alt="앱 화면" className="w-[30px]" />
          </div>
        </p>

        <div className="flex gap-[16px] mt-6  text-white">
          <a
            href="https://apps.apple.com/kr/app/%EC%95%84%EC%B0%A8-%EC%9D%B4%EC%A0%A0-%EB%86%93%EC%B9%98%EC%A7%80-%EB%A7%88%EC%84%B8%EC%9A%94/id6742465621" // 앱스토어 URL 넣기
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3C3C3C] px-[34px] py-[15px] rounded-2xl flex justify-center items-center gap-[20px]"
          >
            <img src={appleLogo} alt="Apple Icon" className="w-5 h-5" />
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=your.package.name" // 구글 플레이 URL 넣기
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3C3C3C] px-[34px] py-[15px] rounded-2xl flex justify-center items-center gap-[20px]"
          >
            <img src={playStoreLogo} alt="Apple Icon" className="w-5 h-5" />
            Google Play
          </a>
        </div>

        <Link
          to="/login"
          className="bg-gray-200 text-gray-700 px-[100px] py-[15px] rounded-2xl mt-3"
        >
          Get started on the Web →
        </Link>

        <div className="mt-[130px] text-center">
          <p className="mb-[25px]">
            <span className="text-[#1E1E1E] text-center font-pretendard text-[47px] font-medium leading-[60px]">
              과제 마감 전
            </span>
            <br />
            <span className="text-[#06F] font-pretendard text-[47px] font-extrabold leading-[60px]">
              알림을 받으세요!
            </span>
          </p>
          <p className="text-[#24223E] text-center font-pretendard text-[20px] font-normal leading-[27px]">
            <span>바쁜 일상 속에서 과제 마감일을 잊어버리지 않도록</span>
            <br />
            <span>아차가 도와드립니다.</span>
          </p>
        </div>
      </div>
      <FeatureSection />
      <TaskSection />
      <ImageSlide />
      <FAQ />
      <Footer />
    </>
  );
}

export default Landing;
