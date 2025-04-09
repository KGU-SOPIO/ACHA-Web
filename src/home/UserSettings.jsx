import Loading01 from "../components/Loading01";
import { useUserSettings } from "../contexts/UserSettingsContext";

function UserSettings() {
  const { memberInfo, isNotificationOn, isLoading, error, toggleNotification } =
    useUserSettings();

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
    <div className="py-8 px-8 max-w-6xl mx-auto rounded-[20px] border border-[#E4E8F1] bg-white">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* 사용자 정보 */}
        <div className="flex-1 flex items-center md:pr-[20px] pl-[30px]">
          <div>
            <p className="text-[#1E1E1E] text-[24px] leading-[40px]">
              <span className="font-bold">{memberInfo.name} </span>
              <span className="font-medium">님</span>
            </p>
            <p className="leading-[20px]">
              <span className="text-[#979797] font-normal text-[15px] mr-[9px]">
                {memberInfo.college}
              </span>
              <span className="text-white text-center font-medium text-[12px] bg-main-blue px-[9px] py-[8px] rounded-full">
                {memberInfo?.affiliation}
              </span>
            </p>
          </div>
        </div>

        {/* 모바일용 가로 구분선 */}
        <div className="block md:hidden border-t border-gray-300 my-4"></div>
        {/* 데스크탑용 세로 구분선 */}
        <div className="hidden md:block border-l border-gray-300 h-24 mx-4"></div>

        {/* 알림주기 */}
        <div className="flex-1 flex  items-start">
          <div className="capitalize flex justify-between">
            <p className="text-[#1E1E1E] font-normal text-[15px] pr-[60px] pl-[30px]">
              알림주기
            </p>
            <p className="text-[#3C3C3C] font-normal text-[15px] leading-[32px]">
              <span className="text-main-blue font-bold">3</span>
              <span>일 · </span>
              <span className="text-main-blue font-bold">1</span>
              <span>일 · </span>
              <span className="text-main-blue font-bold">1</span>
              <span>시간 전</span>
              <br />
              <span className="text-gray-500">강의 / 과제 알림 발송</span>
            </p>
          </div>
        </div>

        {/* 모바일용 가로 구분선 */}
        <div className="block md:hidden border-t border-gray-300 my-4"></div>
        {/* 데스크탑용 세로 구분선 */}
        <div className="hidden md:block border-l border-gray-300 h-24 mx-4"></div>

        {/* 알림 켜기 */}
        <div className="flex-1 flex items-center mb-[40px]">
          <p className="text-gray-900 text-sm capitalize mr-[168px] pl-[30px]">
            알림켜기
          </p>
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleNotification}
          >
            <div
              className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 ${
                isNotificationOn ? "bg-main-blue" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                  isNotificationOn ? "translate-x-6" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
