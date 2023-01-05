import { createSlice } from "@reduxjs/toolkit";

export const deletePackageSlice = createSlice({
  name: "deletePackage",
  initialState: [],
  reducers: {
    deletePackage: (state, action) => {
      return (state = action.payload);
    },
    deletePackageFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { deletePackage, deletePackageFailure } =
deletePackageSlice.actions;
export default deletePackageSlice.reducer;
