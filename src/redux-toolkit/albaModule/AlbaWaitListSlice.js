import { createSlice } from "@reduxjs/toolkit";

// 수정 필요
let nextId = 0;
const initialValue = [
  {
    alba_id: 0,
    company_id: 1,
    user_id: 0,
    user_name: "김민규",
    email: "hello123@naver.com",
    code: "24DW4Y89",
    state: "대기",
  },
  {
    alba_id: 1,
    company_id: 1,
    user_id: 1,
    user_name: "윤서영",
    email: "seoyoung7623@naver.com",
    code: "DE32S5DU",
    state: "거절",
  },
];

export const albaWaitListSlice = createSlice({
  name: "alba_waitlist",
  initialState: initialValue,
  reducers: {},
});

export default albaWaitListSlice.reducer;
