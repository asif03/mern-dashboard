import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme")).theme
    : "light",
  toggle: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme")).toggle
    : false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload.theme;
      state.toggle = action.payload.toggle;
      localStorage.setItem("theme", JSON.stringify(action.payload));
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
