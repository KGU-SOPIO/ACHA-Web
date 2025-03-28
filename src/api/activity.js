import { server } from "./server";

export const fetchActivityMy = async () => {
  try {
    const response = await server.get("/activities/my");
    return response.data;
  } catch (error) {
    console.error("API 호출 오류:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const fetchCourseActivities = async (code) => {
  try {
    console.log("API 요청 보냄: code =", code);
    const response = await server.get(`/activities/lecture`, {
      params: { code },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(
        "서버 응답 에러:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("요청은 갔으나 응답이 없음:", error.request);
    } else {
      console.error("기타 오류:", error.message);
    }
  }
};
