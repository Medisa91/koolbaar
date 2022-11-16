import { createSlice } from "@reduxjs/toolkit";

export const flightInquirySlice = createSlice({
  name: "flightInquiry",
  initialState: [],
  reducers: {
    flightInquiry: (state, action) => {
      return (state = action.payload.data);
    },
  },
});

export const { flightInquiry } = flightInquirySlice.actions;
export default flightInquirySlice.reducer;
