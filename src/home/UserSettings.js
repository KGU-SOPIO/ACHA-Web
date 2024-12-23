import { IoChevronForwardOutline } from "react-icons/io5";
import mockData from "../mocks/mocks.json";
import { useState } from "react";

function UserSettings() {
  const [isNotificationOn, setIsNotificationOn] = useState(false);

  // 알림 켜기/끄기 상태 토글
  const toggleNotification = () => {
    setIsNotificationOn((prevState) => !prevState);
  };

  return (
    <div className="p-8 px-12 max-w-6xl mx-auto rounded-lg bg-[rgba(228,232,241,1)]">
      <div className="flex justify-between items-center">
        {/* 사용자 정보 */}
        <div className="flex items-center pr-12">
          <div className="">
            <h2 className="text-lg font-semibold">{mockData.user.name}님</h2>
            <p className="text-sm text-gray-500">
              {mockData.user.college}{" "}
              <span className="bg-main-blue text-white px-2 py-1 rounded-xl">
                {mockData.user.department}
              </span>
            </p>
          </div>
        </div>
        <a
          href="/mypage"
          aria-label="마이페이지로 이동"
          className="text-gray-700 hover:text-gray-900"
        >
          <IoChevronForwardOutline size={30} className="text-gray-400" />
        </a>

        {/* 구분선 */}
        <div className="border-l-2 border-gray-300 h-12 mx-8"></div>

        {/* 알림주기 */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <p>알림주기</p>
            <p>3 시간</p>
          </div>
          <div className="flex justify-end items-center gap-2">
            <input
              placeholder="시간 단위"
              className="p-2 border rounded w-1/2 "
            />
            <p className="m-0">시간</p>
            <p className="m-0 bg-main-blue rounded-xl text-white w-6 h-6  flex justify-center items-center cursor-pointer">
              +
            </p>
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
