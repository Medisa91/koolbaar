import { createSlice } from "@reduxjs/toolkit";

export const changeRequestStatusSlice = createSlice({
  name: "changeRequestStatus",
  initialState: [],
  reducers: {
    changeRequestStatus: (state, action) => {
      return (state = action.payload);
    },
    changeRequestStatusFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeRequestStatus, changeRequestStatusFailure } = changeRequestStatusSlice.actions;
export default changeRequestStatusSlice.reducer;
