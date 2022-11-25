import { createSlice } from "@reduxjs/toolkit";

export const packageTypesSlice = createSlice({
  name: "packagesType",
  initialState: [],
  reducers: {
    getPackagesType: (state, action) => {
      return (state = action.payload.data);
    },
    packagesTypeFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { getPackagesType, packagesTypeFailure } =
  packageTypesSlice.actions;
export default packageTypesSlice.reducer;
