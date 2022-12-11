import { createSlice } from "@reduxjs/toolkit";

export const travelInfoHomeRequestSlice = createSlice({
  name: "travelRequestHomeRequest",
  initialState: [],
  reducers: {
    travelRequestHomeRequest: (state, action) => {
      return (state = action.payload.data);
    },
    travelRequestHomeRequestFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { travelRequestHomeRequest, travelRequestHomeRequestFailure } =
  travelInfoHomeRequestSlice.actions;

export default travelInfoHomeRequestSlice.reducer;
