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
      // console.log(action.payload);
      // nextId += 1;
      // const nextId = useRef(2);
      nextId = action.payload.company_id += 1;
      // state.company_id += 1;
      state.push({ ...action.payload, company_id: nextId });
    },
    init: (state, action) => {
      //필요없을듯 useSelecter 사용가능
      // const nextId = useRef(2);
      const company = state.filter(
        (company) => company.company_id === parseInt(action.payload)
      );
      // console.log(company);
      return company;
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export default companySlice.reducer;
export const { create, init, errormessage } = companySlice.actions;
