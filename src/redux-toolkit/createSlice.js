import { createSlice, current } from "@reduxjs/toolkit";

let nextId = 0;
const initialValue = [
  {
    company_id: 0,
    user_id: "0",
    company_name: "bhc",
    address: "경기도 부천시",
    tel: "02-3333-2323",
    salary_day: 1,
    company_img: null,
  },
  {
    company_id: 1,
    user_id: "0",
    company_name: "CU",
    address: "서울특별시 종로구 CU",
    tel: "02-3333-2323",
    salary_day: 1,
    company_img: null,
  },
];

export const companySlice = createSlice({
  name: "companies",
  initialState: initialValue,
  reducers: {
    create: (state, action) => {
      nextId = action.payload.company_id += 1;
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
