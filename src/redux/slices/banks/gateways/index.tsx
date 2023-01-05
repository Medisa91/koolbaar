import { createSlice } from "@reduxjs/toolkit";

export const gatewaysSlice = createSlice({
  name: "gateways",
  initialState: [],
  reducers: {
    gateways: (state, action) => {
      return (state = action.payload);
    },
    gatewaysFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { gateways, gatewaysFailure } = gatewaysSlice.actions;
export default gatewaysSlice.reducer;
