import { createSlice } from "@reduxjs/toolkit";

export const userDashboardSlice = createSlice({
  name: "userDashboard",
  initialState: [],
  reducers: {
    userDashboard: (state, action) => {
      return (state = action.payload);
    },
    userDashboardFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { userDashboard, userDashboardFailure } =
userDashboardSlice.actions;
export default userDashboardSlice.reducer;
