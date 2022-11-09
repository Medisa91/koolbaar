import { createSlice } from "@reduxjs/toolkit";

export const typesSlice = createSlice({
  name: "types",
  initialState: {
    data: [],
  },
  reducers: {
    getPackagesType: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const { getPackagesType } = typesSlice.actions;
export const showTypes = (state) => state.types;
export default typesSlice.reducer;
