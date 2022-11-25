import { createSlice } from "@reduxjs/toolkit";

export const weightTypesSlice = createSlice({
  name: "weightRanges",
  initialState: [],
  reducers: {
    getWeightRanges: (state, action) => {
      return (state = action.payload.data);
    },
    weightRangeFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { getWeightRanges, weightRangeFailure } = weightTypesSlice.actions;
export default weightTypesSlice.reducer;
