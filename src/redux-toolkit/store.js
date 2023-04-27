import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from './counterSlice';
import { companySlice } from "./createSlice";
import { messageSlice } from "./messageSlice";
import { albaListSlice } from "./albaListSlice";

const store = configureStore({
  reducer: {
    companies: companySlice.reducer,
    message: messageSlice.reducer,
    albalist: albaListSlice.reducer,
  },
});
export default store;
