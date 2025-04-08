import { server } from "./server";

export const fetchActivityMy = async () => {
  try {
    const response = await server.get("/api/v1/activities/my");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchCourseActivities = async (code) => {
  try {
    const response = await server.get(`/api/v1/activities/course`, {
      params: { code },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchNotice = async (code) => {
  try {
    const response = await server.get(`/api/v1/notifications`, {
      params: { code },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { contents: [] };
    }
    throw error.response?.data || error.message;
  }
};

export const fetchNoticeDetail = async (noticeId) => {
  try {
    const response = await server.get(`/api/v1/notifications/${noticeId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchFcm = async () => {
  try {
    const response = await server.get("/api/v1/alert");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fcm = async (nextStatus) => {
  try {
    const response = await server.post("/api/v1/alert", { status: nextStatus });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
