import { createSlice } from "@reduxjs/toolkit";

export const editUserInfoSlice = createSlice({
  name: "editUserInfo",
  initialState: [],
  reducers: {
    editUserInfo: (state, action) => {
      return (state = action.payload);
    },
    editUserInfoFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { editUserInfo, editUserInfoFailure } = editUserInfoSlice.actions;
export default editUserInfoSlice.reducer;
