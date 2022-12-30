import { createSlice } from "@reduxjs/toolkit";

export const sendAgreementSlice = createSlice({
  name: "sendAgreement",
  initialState: [],
  reducers: {
    sendAgreement: (state, action) => {
      return (state = action.payload);
    },
    sendAgreementFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { sendAgreement, sendAgreementFailure } =
sendAgreementSlice.actions;
export default sendAgreementSlice.reducer;
