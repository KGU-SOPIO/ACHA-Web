import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";
import { useState } from "react";

function UserSettings() {
  const [isNotificationOn, setIsNotificationOn] = useState(false);

  // 알림 켜기/끄기 상태 토글
  const toggleNotification = () => {
    setIsNotificationOn((prevState) => !prevState);
  };

  return (
    <div className="p-8 px-12 max-w-6xl mx-auto rounded-lg bg-white">
      <div className="flex justify-between items-center">
        {/* 사용자 정보 */}
        <div className="flex items-center pr-12">
          <div className="">
            <h2 className="text-lg font-semibold">서민혁님</h2>
            <p className="text-sm text-gray-500">
              소프트웨어경영대학{" "}
              <span className="bg-main-blue text-white px-2 py-1 rounded-xl">
                컴퓨터공학전공
              </span>
            </p>
          </div>
        </div>
        <a
          href="/mypage"
          aria-label="마이페이지로 이동"
          className="text-gray-400 hover:text-gray-900"
        >
          <ArrowRight className="text-gray-300 w-6 h-6" />
        </a>

        {/* 구분선 */}
        <div className="border-l-2 border-gray-300 h-12 mx-8"></div>

        {/* 알림주기 */}
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="mr-[24px]">알림주기</p>
            </div>
            <div className="text-end items-center text-gray-500">
              <p>여러분의 알림은</p>
              <p>
                <span className="font-bold">3일전 / 1일전 / 1시간 전</span>
                <span>에</span>
              </p>
              <p>전송됩니다</p>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-l-2 border-gray-300 h-12 mx-8"></div>

        {/* 알림 켜기*/}
        <div>
          <div className="flex justify-between items-center">
            <p className="pr-24">알림켜기</p>
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleNotification}
            >
              <div
                className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ${
                  isNotificationOn ? "bg-main-blue" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                    isNotificationOn ? "transform translate-x-6" : ""
                  }`}
                />
              </div>
              <p className="ml-2">{isNotificationOn ? "켜짐" : "꺼짐"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
