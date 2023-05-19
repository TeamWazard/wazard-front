import { createSlice, current } from "@reduxjs/toolkit";

const initialValue = [
  {
    company_id: 0,
    user_id: "0",
    company_name: "bhc",
    zonecode: "12344",
    address: "경기도 부천시",
    address_detail: "1층",
    tel: "02-3333-2323",
    salary_day: 1,
    company_img: null,
    company_type: "프랜차이즈",
  },
  {
    company_id: 1,
    user_id: "0",
    company_name: "CU",
    zonecode: "12344",
    address: "서울특별시 종로구 CU",
    address_detail: "1층",
    tel: "02-3333-2323",
    salary_day: 1,
    company_img: null,
    company_type: "마트/편의점",
  },
];

export const companySlice = createSlice({
  name: "companies",
  initialState: initialValue,
  reducers: {
    create: (state, action) => {
      const nextId = state.length;
      state.push({ ...action.payload, company_id: nextId });
    },
    edit: (state, action) => {
      const { id, company } = action.payload;
      // console.log(current(state[id])); // 값확인
      return state.map((item, idx) => (idx === id ? company : item));
    },
  },
});

export default companySlice.reducer;
export const { create, edit } = companySlice.actions;
