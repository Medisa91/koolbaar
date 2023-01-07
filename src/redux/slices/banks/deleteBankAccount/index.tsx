import { createSlice } from "@reduxjs/toolkit";

export const deleteAccountSlice = createSlice({
  name: "deleteAccount",
  initialState: [],
  reducers: {
    deleteAccount: (state, action) => {
      return (state = action.payload);
    },
    deleteAccountFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { deleteAccount, deleteAccountFailure } = deleteAccountSlice.actions;
export default deleteAccountSlice.reducer;
