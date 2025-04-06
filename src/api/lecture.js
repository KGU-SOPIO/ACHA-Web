import { server } from "./server";

export const fetchMemberTodayLecture = async () => {
  try {
    const response = await server.get("/member-courses/today");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchMemberLecture = async () => {
  try {
    const response = await server.get("/member-courses");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
