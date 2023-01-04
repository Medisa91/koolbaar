import { createSlice } from "@reduxjs/toolkit";

export const editTravelSlice = createSlice({
  name: "editTravel",
  initialState: [],
  reducers: {
    editTravel: (state, action) => {
      return (state = action.payload);
    },
    editTravelFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { editTravel, editTravelFailure } = editTravelSlice.actions;
export default editTravelSlice.reducer;
