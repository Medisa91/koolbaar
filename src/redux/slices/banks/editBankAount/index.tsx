import { createSlice } from "@reduxjs/toolkit";

export const editAccountSlice = createSlice({
  name: "editAccount",
  initialState: [],
  reducers: {
    editAccount: (state, action) => {
      return (state = action.payload);
    },
    editAccountFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { editAccount, editAccountFailure } = editAccountSlice.actions;
export default editAccountSlice.reducer;
