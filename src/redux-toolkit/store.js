import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from './counterSlice';
import { companySlice } from "./createSlice";
import { albaListSlice } from "./albaListSlice";
import { albaSalarySlice } from "./albaSalarySlice";
import { albaCompanyListSlice } from "./albaModule/AlbaCompanyListReducer";
import { AlbaContractSlice } from "./albaModule/AlbaContractSlice";

const store = configureStore({
  reducer: {
    companies: companySlice.reducer,
    albalist: albaListSlice.reducer,
    albasalary: albaSalarySlice.reducer,
    alba_company: albaCompanyListSlice.reducer,
    alba_contract: AlbaContractSlice.reducer,
  },
});

export default store;
