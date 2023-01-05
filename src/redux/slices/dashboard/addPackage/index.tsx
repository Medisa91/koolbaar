import { createSlice } from "@reduxjs/toolkit";

export const addPackageSlice = createSlice({
  name: "addPackage",
  initialState: [],
  reducers: {
    addPackage: (state, action) => {
      return (state = action.payload);
    },
    addPackageFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { addPackage, addPackageFailure } = addPackageSlice.actions;
export default addPackageSlice.reducer;
