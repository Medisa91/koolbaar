import { createSlice } from "@reduxjs/toolkit";

export const addBankAccountSlice = createSlice({
  name: "addBankAccount",
  initialState: [],
  reducers: {
    addBankAccount: (state, action) => {
      return (state = action.payload);
    },
    addBankAccountFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { addBankAccount, addBankAccountFailure } = addBankAccountSlice.actions;
export default addBankAccountSlice.reducer;
