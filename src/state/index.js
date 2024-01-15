import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};
const slice = createSlice({
  initialState,
  name: "mode",
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = slice.actions;
export default slice.reducer;
