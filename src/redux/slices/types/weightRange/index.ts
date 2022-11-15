import { createSlice } from "@reduxjs/toolkit";

export const weightTypesSlice = createSlice({
  name: "weightRanges",
  initialState: [],
  reducers: {
    getWeightRanges: (state, action) => {
      return (state = action.payload.data);
    },
  },
});

export const { getWeightRanges } = weightTypesSlice.actions;
export const showWeightRanges = (state) => state.weightRanges;
export default weightTypesSlice.reducer;
