import { createSlice } from "@reduxjs/toolkit";

export const packageTypesSlice = createSlice({
  name: "packagesType",
  initialState: [],
  reducers: {
    getPackagesType: (state, action) => {
      return (state = action.payload.data);
    },
  },
});

export const { getPackagesType } = packageTypesSlice.actions;
export const showPackagesType = (state) => state.packagesType;
export default packageTypesSlice.reducer;
