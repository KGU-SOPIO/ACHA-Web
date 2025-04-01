import { server } from "./server";

export const fetchMemberTodayLecture = async () => {
  try {
    const response = await server.get("/member-courses/today");
    return response.data;
  } catch (error) {
    console.error("API 호출 오류:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const fetchMemberLecture = async () => {
  try {
    const response = await server.get("/member-courses");
    console.log("API 원본 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("API 호출 오류:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};
