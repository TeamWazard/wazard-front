import { axiosApi } from "./axios";

export const uploadCompany = async ({
  accountId,
  email,
  logoImageUrl,
  companyName,
  companyAddress,
  companyContact,
  salaryDate,
  // user_id: "0",
  // companyName: "bhc",
  // zonecode: "12344",
  // address: "경기도 부천시",
  // address_detail: "1층",
  // tel: "02-3333-2323",
  // salary_day: 1,
  // company_img:
  //   "https://www.sisaweekly.com/news/photo/202005/31582_47854_5238.jpg",
  // company_type: "프랜차이즈 😋",
}) => {
  return await axiosApi.post(`/company/register/${accountId}`, {
    email,
    logoImageUrl,
    companyName,
    companyAddress,
    companyContact,
    salaryDate,
  });
};

export const getCompanies = async ({ email, accountId }) => {
  return await axiosApi.get(`/company/own/${accountId}`, {
    email,
  });
};
