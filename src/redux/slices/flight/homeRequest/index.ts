import { createSlice } from "@reduxjs/toolkit";

export const homeRequestSlice = createSlice({
  name: "homeRequest",
  initialState: [],
  reducers: {
    homeRequest: (state, action) => {
      return (state = action.payload.data);
    },
    homeRequestFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { homeRequest, homeRequestFailure } = homeRequestSlice.actions;
export default homeRequestSlice.reducer;
