import { createSlice } from "@reduxjs/toolkit";

export const getChangedStatusSlice = createSlice({
  name: "getChangedStatus",
  initialState: [],
  reducers: {
    getChangedStatus: (state, action) => {
      return (state = action.payload.data);
    },
    getChangedStatusFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { getChangedStatus, getChangedStatusFailure } =
getChangedStatusSlice.actions;
export default getChangedStatusSlice.reducer;
