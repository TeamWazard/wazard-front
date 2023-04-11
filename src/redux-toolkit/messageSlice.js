import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;
const initialValue = {
  errormessage: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState: initialValue,
  reducers: {
    errormessage: (state, action) => {
      if (!action.payload) {
        state.errormessage = "칸을 채워주세요.";
      } else {
        state.errormessage = "";
      }
    },
  },
});

export default messageSlice.reducer;
export const { errormessage } = messageSlice.actions;
