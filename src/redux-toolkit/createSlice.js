import { createSlice, current } from "@reduxjs/toolkit";
import { useRef } from "react";
// const nextId = useRef(2);
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
      const index = state.findIndex(
        (company) => company.company_id === action.payload.company_id
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export default companySlice.reducer;
export const { create, edit, remove } = companySlice.actions;
