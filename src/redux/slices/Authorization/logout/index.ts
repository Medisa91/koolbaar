import { createSlice } from "@reduxjs/toolkit";

export const logoutSlice = createSlice({
  name: "logout",
  initialState: {
    data: [],
  },
  reducers: {
    logout: (state, action) => {
      state.data.push(action.payload);
    },
    logoutFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { logout, logoutFailure } = logoutSlice.actions;
export const showLogoutResult = (state) => state.logout;
export default logoutSlice.reducer;
