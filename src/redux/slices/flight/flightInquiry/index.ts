import { createSlice } from "@reduxjs/toolkit";

export const flightInquirySlice = createSlice({
  name: "flightInquiry",
  initialState: [],
  reducers: {
    flightInquiry: (state, action) => {
      return (state = action.payload);
    },
    flightInquiryFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { flightInquiry, flightInquiryFailure } =
  flightInquirySlice.actions;
export default flightInquirySlice.reducer;
