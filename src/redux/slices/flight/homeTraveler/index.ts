import { createSlice } from "@reduxjs/toolkit";

export const homeTravelerSlice = createSlice({
  name: "homeTraveler",
  initialState: [],
  reducers: {
    homeTraveler: (state, action) => {
      return (state = action.payload.data);
    },
    homeTravelerFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { homeTraveler, homeTravelerFailure } = homeTravelerSlice.actions;
export default homeTravelerSlice.reducer;
