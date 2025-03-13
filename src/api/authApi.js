import { server } from "./server";

export const login = async (studentId, password) => {
  try {
    const response = await server.post("/members/signin", {
      studentId,
      password,
    });

    if (response.data?.code === "MEMBER_NOT_FOUND") {
      return {
        success: false,
        message: "아차 서비스의 회원이 아닙니다.",
        studentId,
      };
    }

    return { success: true, data: response.data };
  } catch (error) {
    if (
      error.response?.status === 404 &&
      error.response?.data?.code === "MEMBER_NOT_FOUND"
    ) {
      return {
        success: false,
        message: "아차 서비스의 회원이 아닙니다.",
        studentId,
      };
    }
    throw error.response?.data || error.message;
  }
};

export const fetchMemberData = async (studentId, password) => {
  try {
    const response = await server.post("/members/data", {
      studentId,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const signup = async (signupData) => {
  try {
    const response = await server.post("/members/signup", signupData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
