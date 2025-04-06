import { server } from "./server";

export const fetchActivityMy = async () => {
  try {
    const response = await server.get("/activities/my");
    return response.data;
  } catch (error) {
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
    throw error.response?.data || error.message;
  }
};

export const fetchNotice = async (code) => {
  try {
    const response = await server.get(`/notifications`, {
      params: { code },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchNoticeDetail = async (noticeId) => {
  try {
    const response = await server.get(`/notifications/${noticeId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchFcm = async () => {
  try {
    const response = await server.get("/alert");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fcm = async (nextStatus) => {
  try {
    const response = await server.post("/alert", { status: nextStatus });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
