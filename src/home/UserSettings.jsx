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
    <div
      className="py-[38px] pl-[55px] pr-[64px] max-w-6xl mx-auto rounded-3xl border border-[#E4E8F1] bg-white"
      style={{
        fontFamily: '"Noto Sans KR"',
        fontFeatureSettings: "'liga' off, 'clig' off",
      }}
    >
      <div className="flex justify-between items-center">
        {/* 사용자 정보 */}
        <div className="flex items-center pr-[80px]">
          <div>
            <p className="text-[#1E1E1E] text-[24px] leading-[40px]">
              <span className="font-bold ">{memberInfo.name}</span>
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

        {/* 구분선 */}
        <div className="border-l-[1px] border-[#D9D9D9] h-[100px] "></div>

        {/* 알림주기 */}
        <div className="flex justify-between items-start">
          <div className="pr-[60px]">
            <p className="text-[#1E1E1E] font-normal text-[15px] capitalize">
              알림주기
            </p>
          </div>
          <div className="text-end">
            <p className="text-[#3C3C3C] font-normal text-[15px] leading-[32px] capitalize">
              <span className="text-main-blue text-right font-bold">3</span>
              <span>일</span>
              <span>·</span>
              <span className="text-main-blue text-right font-bold">1</span>
              <span>일</span>
              <span>·</span>
              <span className="text-main-blue text-right font-bold">1</span>
              <span>시간 전</span>
              <br />
              <span className="text-[#979797] font-normal">
                강의 / 과제 알림 발송
              </span>
            </p>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-l-[1px] border-[#D9D9D9] h-[100px] "></div>

        {/* 알림 켜기*/}

        <div className="flex justify-between items-start mb-[35px]">
          <p className="text-[#1E1E1E] font-normal text-[15px] leading-normal capitalize pr-[168px]">
            알림켜기
          </p>
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleNotification}
          >
            <div
              className={`w-[46.4px] h-[24px] rounded-full flex items-center transition-colors duration-300 ${
                isNotificationOn ? "bg-main-blue" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-[20px] h-[20px] rounded-full bg-white transition-transform duration-300 ${
                  isNotificationOn ? "transform translate-x-6" : ""
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
