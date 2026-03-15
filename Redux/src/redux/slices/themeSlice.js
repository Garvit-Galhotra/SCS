import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light" },
  reducers: {
    changeLight: (state) => {
      state.mode = "light";
    },
    changeDark: (state) => {
      state.mode = "dark";
    },
  },
});

export const { changeLight, changeDark } = themeSlice.actions;

export default themeSlice.reducer;
