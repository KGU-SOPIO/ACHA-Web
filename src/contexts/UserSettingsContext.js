import React, { createContext, useContext, useEffect, useState } from "react";
import { fcm, fetchFcm } from "../api/activity";

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

  const getMemberInfo = async () => {
    try {
      setIsLoading(true);
      const data = await fetchCurrentMember();
      setMemberInfo(data);
    } catch (error) {
      setError("회원 정보를 불러오는데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadFcmStatus = async () => {
    try {
      const fcmStatus = await fetchFcm();
      setIsNotificationOn(fcmStatus.status);
    } catch (err) {
      setError("알림 상태를 불러오는데 실패했습니다.");
    }
  };

  const toggleNotification = async () => {
    try {
      const nextStatus = !isNotificationOn;
      await fcm(nextStatus);
      setIsNotificationOn(nextStatus);
    } catch (err) {
      setError("알림 상태 변경에 실패했습니다.");
    }
  };

  useEffect(() => {
    getMemberInfo();
    loadFcmStatus();
  }, []);

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
