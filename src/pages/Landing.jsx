import FAQ from "../landing/FAQ";
import FeatureSection from "../landing/FeatureSection";
import Footer from "../components/Footer";
import ImageSlide from "../landing/ImageSlide";
import LendingImg2 from "../assets/lending2.png";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";
import { ReactComponent as RightArrow } from "../landing/right.svg";
import TaskSection from "../landing/TaskSection";
import appleLogo from "../landing/Apple_logo_black 1.svg";
import calendarImg from "../landing/calender.svg";
import playStoreLogo from "../landing/Google_Play_icon.svg 1.png";

function Landing() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
        <Logo className="w-[50px] h-[50px] mt-[100px] sm:w-[70px] sm:h-[70px] sm:mt-[150px]" />

        <img
          src={calendarImg}
          alt="캘린더 이미지"
          className={`
            absolute
            -rotate-[25deg]
            /* 기본(모바일) 사이즈 및 위치 */
            w-[200px]
            top-[-20px]
            right-[-50px]

            /* sm breakpoint (640px~) */
            sm:w-[300px]
            sm:top-[-30px]
            sm:right-[-120px]

            /* md breakpoint (768px~) */
            md:w-[400px]
            md:top-[-40px]
            md:right-[-180px]

            /* lg breakpoint (1024px~) */
            lg:w-[600px]
            lg:top-[-50px]
            lg:right-[-300px]
          `}
        />

        <h1 className="text-main-blue text-center font-pretendard text-[50px] sm:text-[80px] lg:text-[100px] font-extrabold leading-[55px] sm:leading-[65px] lg:leading-[71px] tracking-[-0.5px] py-[20px] sm:py-[34px]">
          ACHA!
        </h1>

        <p className="text-gray-600 text-base sm:text-lg text-center">
          <span className="text-main-blue font-pretendard text-[18px] sm:text-[20px] font-extrabold leading-[28px] sm:leading-[32px]">
            ‘해야지’{" "}
          </span>
          <span className="text-[#24223E] font-pretendard text-[18px] sm:text-[20px] font-bold leading-[28px] sm:leading-[32px]">
            하고, 잊어버리시진 않았나요?
          </span>
          <br />
          <div className="flex items-center justify-center">
            다가올 마감일 놓치지 마세요!
            <img
              src={LendingImg2}
              alt="앱 화면"
              className="w-[20px] sm:w-[30px]"
            />
          </div>
        </p>

        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="w-full max-w-md">
            {/* 1줄: 앱스토어와 구글플레이 버튼 */}
            <div className="flex gap-4">
              <a
                href="https://apps.apple.com/kr/app/%EC%95%84%EC%B0%A8-%EC%9D%B4%EC%A0%A0-%EB%86%93%EC%B9%98%EC%A7%80-%EB%A7%88%EC%84%B8%EC%9A%94/id6742465621"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center 
                  bg-[#3C3C3C] text-white px-[25px] py-[15px] rounded-2xl
                  whitespace-nowrap font-pretendard text-[20px] font-bold leading-[34.5px]"
              >
                <img
                  src={appleLogo}
                  alt="Apple Icon"
                  className="w-4 sm:w-5 h-4 sm:h-5 mr-2 "
                />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=your.package.name"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center bg-[#3C3C3C] text-white px-[25px] py-[15px] rounded-2xl whitespace-nowrap font-pretendard text-[20px] font-bold leading-[34.5px]"
              >
                <img
                  src={playStoreLogo}
                  alt="Google Play Icon"
                  className="w-4 sm:w-5 h-4 sm:h-5 mr-2"
                />
                Google Play
              </a>
            </div>

            {/* 2줄: 시작하기 버튼 */}
            <div className="mt-[14px]">
              <Link
                to="/login"
                className=" w-full block text-center bg-gray-200 text-gray-700 px-4 py-2 rounded-2xl whitespace-nowrap"
              >
                <div className="flex items-center justify-center px-[75px] py-[10px]">
                  <p className="mr-[16px]">
                    <span class="text-[#6D6D6D] text-center font-pretendard text-[20px] font-semibold leading-[34.5px]">
                      Get started on the{" "}
                    </span>
                    <span class="text-[#6D6D6D] font-pretendard text-[20px] font-bold leading-[34.5px]">
                      Web
                    </span>
                  </p>{" "}
                  <RightArrow />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-[80px] sm:mt-[130px] text-center px-4">
          <p className="mb-[15px] sm:mb-[25px]">
            <span className="text-[#1E1E1E] text-center font-pretendard text-[30px] sm:text-[47px] font-medium leading-[40px] sm:leading-[60px]">
              과제 마감 전
            </span>
            <br />
            <span className="text-[#06F] font-pretendard text-[30px] sm:text-[47px] font-extrabold leading-[40px] sm:leading-[60px]">
              알림을 받으세요!
            </span>
          </p>
          <p className="text-[#24223E] text-center font-pretendard text-[16px] sm:text-[20px] font-normal leading-[24px] sm:leading-[27px]">
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
    </div>
  );
}

export default Landing;
