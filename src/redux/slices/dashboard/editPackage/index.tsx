import { createSlice } from "@reduxjs/toolkit";

export const editPackageSlice = createSlice({
  name: "editPackage",
  initialState: [],
  reducers: {
    editPackage: (state, action) => {
      return (state = action.payload);
    },
    editPackageFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { editPackage, editPackageFailure } = editPackageSlice.actions;
export default editPackageSlice.reducer;
