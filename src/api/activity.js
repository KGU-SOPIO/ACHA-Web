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
