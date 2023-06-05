import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
  outUser: (state, action) => {
    return null; // 로그아웃 시 사용자 정보를 초기화
  },
});

export const { getUser, outUser } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice, current } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: null,
//   reducers: {
//     login: (state, action) => {
//       // console.log(current(state));
//       // console.log(current(state[nextId]));
//       console.log(action.payload);
//       return action.payload;
//     },
//     logout: (state) => {
//       return null; // 로그아웃 시 사용자 정보를 초기화
//     },
//   },
// });

// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;
