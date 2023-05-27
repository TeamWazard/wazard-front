import { createSlice, current } from "@reduxjs/toolkit";
import { useRef } from "react";

let nextId = 0;
const initialValue = [
  {
    user_id: 0,
    company_id: 1,
    company_name: "손가",
    address: "부천시 역곡동 역곡로 000",
    tel: "031-983-0000",
    late: 4,
    absent: 2,
    score: 7.6,
    alba_start: "2022.03.22",
    alba_end: "2022.09.22",
    company_img: null,
  },
  {
    user_id: 0,
    company_id: 2,
    company_name: "CU",
    address: "부천시 역곡동 역곡로 111",
    tel: "031-983-0011",
    late: 10,
    absent: 1,
    score: 6.6,
    alba_start: "2022.03.22",
    alba_end: "2022.09.22",
    company_img: null,
  },

  {
    user_id: 0,
    company_id: 3,
    company_name: "파리바게뜨",
    address: "부천시 역곡동 역곡로 222",
    tel: "031-983-0022",
    late: 5,
    absent: 3,
    score: 9.1,
    alba_start: "2022.03.22",
    alba_end: "2022.09.22",
    company_img: null,
  },
];

export const AlbaRecordListSlice = createSlice({
  name: "alba_Record",
  initialState: initialValue,
  reducers: {},
});

export default AlbaRecordListSlice.reducer;
