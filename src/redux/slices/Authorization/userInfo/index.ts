import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "userInfo",
  initialState: {
    data: [],
  },
  reducers: {
    getUserProfile: (state, action) => {
      state.data.push(action.payload);
    },
    profileFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { getUserProfile, profileFailure } = profileSlice.actions;
export default profileSlice.reducer;
