import { createSlice } from "@reduxjs/toolkit";

export const AlbaReplaceSlice = createSlice({
  name: "alba_replace",
  initialState: [
    {
      userName: "김민규",
      replaceUser: "김정환",
      startTime: "08:00",
      endTime: "13:30",
      checkDate: "2023-06-02",
    },
    {
      userName: "김민규",
      replaceUser: "김정환",
      startTime: "08:00",
      endTime: "13:30",
      checkDate: "2023-06-02",
    },
    {
      userName: "김민규",
      replaceUser: "김정환",
      startTime: "08:00",
      endTime: "13:30",
      checkDate: "2023-06-02",
    },
  ],
  reducers: {
    addReplace: (state, action) => {
      const nextId = state.length;
      state.push({ ...action.payload });
    },
  },
});

export const { addReplace } = AlbaReplaceSlice.actions;

export default AlbaReplaceSlice.reducer;
