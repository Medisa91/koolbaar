import { createSlice } from "@reduxjs/toolkit";

export const userTravelSlice = createSlice({
  name: "userTravel",
  initialState: [],
  reducers: {
    userTravel: (state, action) => {
      return (state = action.payload);
    },
    userTravelFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { userTravel, userTravelFailure } =
userTravelSlice.actions;
export default userTravelSlice.reducer;
