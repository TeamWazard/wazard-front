import { createSlice, current } from "@reduxjs/toolkit";
import { useRef } from "react";

let nextId = 0;

const initialValue = [
  {
    company_id: 1,
    user_id: 0,
    user_name: "김민규",
    accumulate_time: 120,
    hourly_wage: 10000,
    accumulate_salary: 1200000,
  },
  {
    company_id: 1,
    user_id: 1,
    user_name: "윤서영",
    accumulate_time: 130,
    hourly_wage: 11000,
    accumulate_salary: 130 * 11000,
  },
];

export const albaSalarySlice = createSlice({
  name: "albaSalary",
  initialState: initialValue,
  reducers: {},
});

export default albaSalarySlice.reducer;
