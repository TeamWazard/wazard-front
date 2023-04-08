import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from './counterSlice';
import { companySlice } from "./createSlice";

const store = configureStore({
  reducer: {
    companies: companySlice.reducer,
  },
});
export default store;
