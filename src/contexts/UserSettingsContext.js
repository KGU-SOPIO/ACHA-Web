import React, { createContext, useContext, useEffect, useState } from "react";

import { fetchCurrentMember } from "../api/authApi";

const UserSettingsContext = createContext();

export const useUserSettings = () => {
  return useContext(UserSettingsContext);
};

export const UserSettingsProvider = ({ children }) => {
  const [memberInfo, setMemberInfo] = useState(null);
  const [isNotificationOn, setIsNotificationOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMemberInfo = async () => {
      try {
        setIsLoading(true);
        console.log("유저세팅 호출");
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

  return (
    <UserSettingsContext.Provider
      value={{
        memberInfo,
        isNotificationOn,
        isLoading,
        error,
        toggleNotification,
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};
