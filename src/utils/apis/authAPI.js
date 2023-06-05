import { axiosApi } from "./axios";

// 회원가입
export const signUp = async ({
  email,
  password,
  userName,
  gender,
  birth,
  phoneNumber,
  role,
}) => {
  return await axiosApi.post("/account/join", {
    email,
    password,
    userName,
    gender,
    birth,
    phoneNumber,
    role,
  });
};
//API 이메일 인증

export const emailauth = async ({ email }) => {
  return await axiosApi.post("/mail/auth", {
    email,
  });
};

export const loginAPI = async ({ email, password }) => {
  try {
    const response = await axiosApi.post(`/account/login`, {
      email,
      password,
    });
    console.log("로그인 완료");
    const accessToken = response.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    return response.data;
  } catch (error) {
    throw error;
  }
};
