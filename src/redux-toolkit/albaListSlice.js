import { createSlice, current } from "@reduxjs/toolkit";
import { useRef } from "react";

let nextId = 0;
const initialValue = [
  {
    alba_id: 0,
    company_id: 1,
    user_id: 0,
    user_name: "김민규",
    user_age: "26",
    user_gender: "남",
    address: "경기도 부천시",
  },
  {
    alba_id: 1,
    company_id: 1,
    user_id: 1,
    user_name: "윤서영",
    user_age: "23",
    user_gender: "여",
    address: "서울특별시",
  },
];

export const albaListSlice = createSlice({
  name: "albalist",
  initialState: initialValue,
  reducers: {},
});

export default albaListSlice.reducer;
