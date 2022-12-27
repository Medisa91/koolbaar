import { createSlice } from "@reduxjs/toolkit";

export const homeRequestFilterSlice = createSlice({
  name: "homeRequestFilter",
  initialState: [],
  reducers: {
    homeRequestFilter: (state, action) => {
      return (state = action.payload.data);
    },
    homeRequestFilterFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { homeRequestFilter, homeRequestFilterFailure } =
  homeRequestFilterSlice.actions;
export default homeRequestFilterSlice.reducer;
