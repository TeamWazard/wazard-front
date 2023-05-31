import { createSlice } from "@reduxjs/toolkit";

export const AlbaReplaceSlice = createSlice({
  name: "alba_replace",
  initialState: [
    {
      user: "김민규",
      replace_user: "김정환",
      time: {
        year: "2023",
        month: "04",
        date: "11",
        start: "07:00",
        end: "12:00",
      },
    },
    {
      user: "김민규",
      replace_user: "김정환",
      time: {
        year: "2023",
        month: "04",
        date: "11",
        start: "07:00",
        end: "12:00",
      },
    },
    {
      user: "김민규",
      replace_user: "김정환",
      time: {
        year: "2023",
        month: "04",
        date: "11",
        start: "07:00",
        end: "12:00",
      },
    },
  ],
  reducers: {
    addReplace: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addReplace } = AlbaReplaceSlice.actions;

export default AlbaReplaceSlice.reducer;
