import { createSlice } from "@reduxjs/toolkit";

export const userPackageSlice = createSlice({
  name: "userPackage",
  initialState: [],
  reducers: {
    userPackage: (state, action) => {
      return (state = action.payload);
    },
    userPackageFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { userPackage, userPackageFailure } =
userPackageSlice.actions;
export default userPackageSlice.reducer;
