import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from './counterSlice';
import { companySlice } from "./createSlice";
import { albaListSlice } from "./albaListSlice";
import { albaSalarySlice } from "./albaSalarySlice";
import { albaCompanyListSlice } from "./albaModule/AlbaCompanyListReducer";
import { AlbaContractSlice } from "./albaModule/AlbaContractSlice";
import { AlbaRecordListSlice } from "./albaModule/AlbaRecordListSlice";
import { AlbaAttendance } from "./albaModule/AlbaAttendance";
import { AlbaReplaceSlice } from "./albaModule/AlbaReplaceSlice";
import { albaWaitListSlice } from "./albaModule/AlbaWaitListSlice";
import { userSlice } from "./userSlice";

const store = configureStore({
  reducer: {
    companies: companySlice.reducer,
    albalist: albaListSlice.reducer,
    albasalary: albaSalarySlice.reducer,
    alba_company: albaCompanyListSlice.reducer,
    alba_contract: AlbaContractSlice.reducer,
    alba_record: AlbaRecordListSlice.reducer,
    alba_attendance: AlbaAttendance.reducer,
    alba_replace: AlbaReplaceSlice.reducer,
    alba_waitlist: albaWaitListSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
