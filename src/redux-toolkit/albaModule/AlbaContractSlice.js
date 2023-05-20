import { createSlice } from "@reduxjs/toolkit";

export const AlbaContractSlice = createSlice({
  name: "alba_contract",
  initialState: {
    user_name: "김민규",
    company_name: "CU",
    contract_start: "2022년 12월 12일",
    contract_end: "2034년 12월 11일",
    address: "경기도 부천시 역곡동 역곡로 130번길 24",
    time: "09:00 - 18:00",
    salary: 9500,
    week: [false, false, true, false, false, false, false],
  },
  reducers: {
    setUserName: (state, action) => {
      state.user_name = action.payload;
    },
    setCompanyName: (state, action) => {
      state.company_name = action.payload;
    },
    setContractStart: (state, action) => {
      state.contract_start = action.payload;
    },
    setContractEnd: (state, action) => {
      state.contract_end = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setSalary: (state, action) => {
      state.salary = action.payload;
    },
    setWeek: (state, action) => {
      state.week = action.payload;
    },
  },
});

export const {
  setUserName,
  setCompanyName,
  setContractStart,
  setContractEnd,
  setAddress,
  setTime,
  setSalary,
  setWeek,
} = AlbaContractSlice.actions;

export default AlbaContractSlice.reducer;
