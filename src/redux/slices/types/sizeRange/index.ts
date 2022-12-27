import { createSlice } from "@reduxjs/toolkit";

export const sizeTypesSlice = createSlice({
  name: "sizeRanges",
  initialState: [],
  reducers: {
    getSizeRanges: (state, action) => {
      return (state = action.payload.data);
    },
    sizeRangeFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { getSizeRanges, sizeRangeFailure } = sizeTypesSlice.actions;
export default sizeTypesSlice.reducer;
