import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  accountId: 1,
  email: "",
  userName: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    setUser: (state, action) => {
      state.accountId = action.payload.accountId;
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.role = action.payload.role;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
