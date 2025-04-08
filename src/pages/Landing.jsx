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
      <div className="relative flex flex-col items-center justify-center">
        <Logo className="w-[50px] h-[50px] md:w-[70px] md:h-[74.229px] flex-shrink-0 aspect-[1/1] md:aspect-[70/74.23] mt-[140px] md:mt-[186px] md:mb-[50px] mb-[30px]" />

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

        <h1 className="text-main-blue text-center font-black leading-[71px] tracking-[-0.5px] text-[48px] md:text-[100px] mb-[24px] md:mb-[48.5px]">
          ACHA!
        </h1>

        <p className="text-gray-600 text-base sm:text-lg text-center">
          <span className="text-main-blue text-center font-extrabold text-[16px] leading-[32px] md:text-[20px]">
            ‘해야지’{" "}
          </span>
          <span className="text-[#24223E] font-bold text-[16px] leading-[32px] md:text-[20px]">
            하고, 잊어버리시진 않았나요?
          </span>
          <br />
          <div className="flex items-center justify-center text-[#24223E] font-normal text-[16px] leading-[32px] md:text-[20px]">
            다가올 마감일 놓치지 마세요!
            <img src={LendingImg2} alt="앱 화면" className="w-[30px]" />
          </div>
        </p>

        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="w-full max-w-md">
            {/* 1줄: 앱스토어와 구글플레이 버튼 */}
            <div className="flex gap-[13px] md:gap-[16px]">
              <a
                href="https://apps.apple.com/kr/app/%EC%95%84%EC%B0%A8-%EC%9D%B4%EC%A0%A0-%EB%86%93%EC%B9%98%EC%A7%80-%EB%A7%88%EC%84%B8%EC%9A%94/id6742465621"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center 
                  bg-[#3C3C3C] text-white px-[28px] py-[14px] md:px-[34px] md:py-[15px] rounded-3xl
                  whitespace-nowrap font-pretendard text-[20px] font-bold leading-[34.5px]
                  gap-[12px] md:gap-[20px] shadow-[0px_4px_4px_rgba(87,75,172,0.15)]"
              >
                <img
                  src={appleLogo}
                  alt="Apple Icon"
                  className="w-[20px] h-[25px]"
                />
                <p className="text-white text-center font-bold text-[16px] leading-[34.5px] md:text-[20px]">
                  App Store
                </p>
              </a>
              <a
                href="https://www.acha.team/install/android"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center 
                  bg-[#3C3C3C] text-white px-[22px] py-[9px] md:px-[25px] md:py-[15px] rounded-3xl
                  whitespace-nowrap font-pretendard text-[20px] font-bold leading-[34.5px]
                  gap-[12px] md:gap-[20px] shadow-[0px_4px_4px_rgba(87,75,172,0.15)]"
              >
                <img
                  src={playStoreLogo}
                  alt="Google Play Icon"
                  className="w-[20px] h-[22px]"
                />
                <p className="text-white text-center font-bold text-[16px] leading-[34.5px] md:text-[20px]">
                  Google Play
                </p>
              </a>
            </div>

            {/* 2줄: 시작하기 버튼 */}
            <div className="mt-[26px] md:mt-[14px]">
              <Link
                to="/login"
                className=" w-full block text-center bg-gray-200 text-gray-700 px-4 py-2 rounded-3xl whitespace-nowrap"
              >
                <div className="flex items-center justify-center pt-[10px] pr-[37px] pb-[11px] pl-[85px] md:pt-[16.75px] md:pr-[73px] md:pb-[14px] md:pl-[89px]">
                  <p className="mr-[32px] md:mr-[26px]  text-[#6D6D6D]">
                    <span class="text-center text-[16px] md:text-[20px] font-semibold leading-[34.5px]">
                      Get started on the{" "}
                    </span>
                    <span class="text-[16px] md:text-[20px] font-bold leading-[34.5px]">
                      Web
                    </span>
                  </p>{" "}
                  <RightArrow />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-[53px] md:mt-[130.5px] text-center px-4">
          <p className="mb-[26.5px] md:mb-[25.5px]">
            <span className="text-[#1E1E1E] text-center text-[24px] md:text-[47px] font-medium leading-[40px] md:leading-[60px]">
              과제 마감 전
            </span>
            <br />
            <span className="text-main-blue text-center text-[24px] md:text-[47px] font-extrabold leading-[40px] md:leading-[60px]">
              알림을 받으세요!
            </span>
          </p>
          <p className="text-[#24223E] text-center text-[16px] md:text-[20px] font-normal leading-[27px]">
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
