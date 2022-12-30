import { createSlice } from "@reduxjs/toolkit";

export const changeOfferStatusSlice = createSlice({
  name: "changeOfferStatus",
  initialState: [],
  reducers: {
    changeOfferStatus: (state, action) => {
      return (state = action.payload);
    },
    changeOfferStatusFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeOfferStatus, changeOfferStatusFailure } = changeOfferStatusSlice.actions;
export default changeOfferStatusSlice.reducer;
