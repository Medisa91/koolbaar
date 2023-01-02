import { createSlice } from "@reduxjs/toolkit";

export const addTravelSlice = createSlice({
  name: "addTravel",
  initialState: [],
  reducers: {
    addTravel: (state, action) => {
      return (state = action.payload);
    },
    addTravelFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTravel, addTravelFailure } = addTravelSlice.actions;
export default addTravelSlice.reducer;
