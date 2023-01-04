import { createSlice } from "@reduxjs/toolkit";

export const deleteTravelSlice = createSlice({
  name: "deleteTravel",
  initialState: [],
  reducers: {
    deleteTravel: (state, action) => {
      return (state = action.payload);
    },
    deleteTravelFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { deleteTravel, deleteTravelFailure } =
deleteTravelSlice.actions;
export default deleteTravelSlice.reducer;
