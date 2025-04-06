import { clearTokens, getTokens, saveTokens } from "./tokenService";

import { server } from "./server";

export const login = async (studentId, password) => {
  try {
    const response = await server.post("/api/v1/members/signin", {
      studentId,
      password,
    });

    if (response.data.accessToken && response.data.refreshToken) {
      saveTokens(response.data.accessToken, response.data.refreshToken);
    }

    if (response.data.extract === false) {
      try {
        await registerInitial();
      } catch (error) {
        return { success: false, message: "데이터 추출에 실패했습니다." };
      }
    }

    return { success: true, data: response.data };
  } catch (error) {
    if (
      error.response.status === 404 &&
      error.response.data.code === "MEMBER_NOT_FOUND"
    ) {
      return {
        success: false,
        message: "아차 서비스의 회원이 아닙니다.",
        studentId,
      };
    }
    if (error.response.data.code === "MEMBER_NOT_AUTHENTICATED") {
      return {
        success: false,
        message: "서비스를 이용하기 위해서 2~3일이 소요됩니다.",
        studentId,
        requireSignup: false,
      };
    }
    throw error.response?.data || error.message;
  }
};

export const fetchMemberData = async (studentId, password) => {
  try {
    const response = await server.post("/api/v1/members/student-data", {
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
    const response = await server.post("/api/v1/members/signup", signupData);

    if (response.data.accessToken && response.data.refreshToken) {
      saveTokens(response.data.accessToken, response.data.refreshToken);
      try {
        await registerInitial();
      } catch (error) {
        throw error.response?.data || error.message;
      }
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const registerInitial = async () => {
  try {
    const response = await server.post("/api/v1/courses/extract");
    return response.data;
  } catch (error) {
    if (error.code === "KUTIS_PASSWORD_ERROR") {
      window.location.href = "/passwordError";
      return;
    }
    window.location.href = "/passwordError";
    throw error.response?.data || error.message;
  }
};

export const reissueToken = async (refreshToken) => {
  try {
    const response = await server.post("/api/v1/members/reissue", {
      refreshToken,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchCurrentMember = async () => {
  try {
    const response = await server.get("/api/v1/members");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteAccount = async (password) => {
  try {
    const { accessToken } = getTokens();

    const response = await server.patch(
      "/api/v1/members/signout",
      { password },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status === 200) {
      server.interceptors.request.clear();
      server.interceptors.response.clear();
      clearTokens();
      localStorage.clear();
      return { success: true };
    }

    return {
      success: false,
      message: response.data?.message || "계정 삭제에 실패했습니다.",
    };
  } catch (error) {
    if (error.response?.status === 401) {
      return { success: false, message: "비밀번호가 일치하지 않습니다." };
    }
    return {
      success: false,
      message:
        error.response?.data?.message || "계정 삭제 중 오류가 발생했습니다.",
    };
  }
};
