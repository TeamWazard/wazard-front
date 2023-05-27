import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;
export const AlbaAttendance = createSlice({
  name: "alba_attendance",
  initialState: [
    {
      id: 0,
      name: "김민규",
      date: "2023-05-24",
      start: "9:59:02",
      end: "4:00:08",
    },
    {
      id: 1,
      name: "김민규",
      date: "2023-05-25",
      start: "10:00:00",
      end: "4:00:30",
    },
    {
      id: 2,
      name: "김민규",
      date: "2023-05-25",
      start: "4:58:43",
      end: "9:00:30",
    },
  ],
  reducers: {
    addAttendance: (state, action) => {
      const { name, date, start, end } = action.payload;
      state.push({ id: nextId++, name, date, start, end });
    },
  },
});

export const { addAttendance } = AlbaAttendance.actions;
export default AlbaAttendance.reducer;
