import { createSlice } from "@reduxjs/toolkit";

export const bankAccountsSlice = createSlice({
  name: "bankAccounts",
  initialState: [],
  reducers: {
    bankAccounts: (state, action) => {
      return (state = action.payload);
    },
    bankAccountsFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { bankAccounts, bankAccountsFailure } = bankAccountsSlice.actions;
export default bankAccountsSlice.reducer;
