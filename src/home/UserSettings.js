import { FaChevronRight } from "react-icons/fa";
import mockData from "../mocks/mocks.json";
import { useState } from "react";

function UserSettings() {
  const [isNotificationOn, setIsNotificationOn] = useState(false);

  // 알림 켜기/끄기 상태 토글
  const toggleNotification = () => {
    setIsNotificationOn((prevState) => !prevState);
  };

  return (
    <div className="p-12 max-w-7xl mx-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center">
        {/* 사용자 정보 */}
        <div className="flex justify-between items-center">
          <div className="pr-12">
            <h2 className="text-lg font-semibold">{mockData.user.name}님</h2>
            <p className="text-sm text-gray-500">
              {mockData.user.college}{" "}
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md">
                {mockData.user.department}
              </span>
            </p>
          </div>
          <a
            href="/mypage"
            aria-label="마이페이지로 이동"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaChevronRight size={20} />
          </a>
        </div>

        {/* 구분선 */}
        <div className="border-l-2 border-gray-300 h-12 mx-4"></div>

        {/* 알림주기 */}
        <div>
          <div className="flex justify-between items-center">
            <p>알림주기</p>
            <p>3 시간</p>
          </div>
          <div className="flex justify-end items-center ">
            <input
              type="number"
              placeholder="시간 단위"
              className="p-2 border rounded w-1/2"
            />
            <p className="m-0">시간</p>
            <p className="m-0 bg-main-blue rounded text-white w-6 h-6  flex justify-center">
              +
            </p>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-l-2 border-gray-300 h-12 mx-4"></div>

        {/* 알림 켜기*/}
        <div>
          <div className="flex justify-between items-center">
            <p className="pr-12">알림켜기</p>
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleNotification}
            >
              <div
                className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ${
                  isNotificationOn ? "bg-blue-500" : "bg-gray-300"
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
