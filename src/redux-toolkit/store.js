import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from './counterSlice';
import { companySlice } from "./createSlice";
import { messageSlice } from "./messageSlice";
import { albaListSlice } from "./albaListSlice";
import { albaSalarySlice } from "./albaSalarySlice";

const store = configureStore({
  reducer: {
    companies: companySlice.reducer,
    message: messageSlice.reducer,
    albalist: albaListSlice.reducer,
    albasalary: albaSalarySlice.reducer,
  },
});

export default store;
