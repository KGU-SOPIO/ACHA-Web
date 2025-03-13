import { useEffect, useState } from "react";

import Loading01 from "../components/Loading01";
import { fetchCurrentMember } from "../api/authApi";

function UserSettings() {
  const [isNotificationOn, setIsNotificationOn] = useState(false);
  const [memberInfo, setMemberInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMemberInfo = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCurrentMember();
        setMemberInfo(data);
      } catch (error) {
        console.error("회원 정보 조회 실패:", error);
        setError("회원 정보를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    getMemberInfo();
  }, []);

  const toggleNotification = () => {
    setIsNotificationOn((prevState) => !prevState);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loading01 />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 px-12 max-w-6xl mx-auto rounded-lg bg-white">
        <div className="text-red-500 text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-8 px-12 max-w-6xl mx-auto rounded-lg bg-white">
      <div className="flex justify-between items-center">
        {/* 사용자 정보 */}
        <div className="flex items-center pr-12">
          <div className="">
            <h2 className="text-lg font-semibold">{memberInfo?.name}님</h2>
            <p className="text-sm text-gray-500">
              {memberInfo?.college}{" "}
              <span className="bg-main-blue text-white px-2 py-1 rounded-xl">
                {memberInfo?.affiliation}
              </span>
            </p>
          </div>
        </div>

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
