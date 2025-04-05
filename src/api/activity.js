import { server } from "./server";

export const fetchActivityMy = async () => {
  try {
    const response = await server.get("/activities/my");
    return response.data;
  } catch (error) {
    console.error(
      "fetchActivityMy API 호출 오류:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

export const fetchCourseActivities = async (code) => {
  try {
    const response = await server.get(`/activities/course`, {
      params: { code },
    });
    return response.data;
  } catch (error) {
    console.error(
      "fetchCourseActivities API 호출 오류:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

export const fetchNotice = async (code) => {
  try {
    console.log("공지사항 API 요청 보냄: code =", code);
    const response = await server.get(`/notifications`, {
      params: { code },
    });
    return response.data;
  } catch (error) {
    console.error(
      "fetchNotice API 호출 오류:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

export const fetchNoticeDetail = async (noticeId) => {
  try {
    console.log("공지사항 상세 정보 API 요청 보냄: id =", noticeId);
    const response = await server.get(`/notifications/${noticeId}`);
    return response.data;
  } catch (error) {
    console.error(
      "fetchNoticeDetail API 호출 오류:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

export const fetchFcm = async () => {
  try {
    const response = await server.get("/alert");
    console.log("알림상태:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "fetchFcm API 호출 오류:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

export const fcm = async (nextStatus) => {
  try {
    const response = await server.post("/alert", { status: nextStatus });
    console.log("알림상태변경:", response.data);
    return response.data;
  } catch (error) {
    console.error("fcm API 호출 오류:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};
