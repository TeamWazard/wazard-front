import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from './counterSlice';
import { companySlice } from "./createSlice";
import { messageSlice } from "./messageSlice";

const store = configureStore({
  reducer: {
    companies: companySlice.reducer,
    message: messageSlice.reducer,
  },
});
export default store;
