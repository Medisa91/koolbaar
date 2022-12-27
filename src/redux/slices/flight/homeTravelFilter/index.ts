import { createSlice } from "@reduxjs/toolkit";

export const homeTravelFilterSlice = createSlice({
  name: "homeTravelFilter",
  initialState: [],
  reducers: {
    homeTravelFilter: (state, action) => {
      return (state = action.payload.data);
    },
    homeTravelFilterFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { homeTravelFilter, homeTravelFilterFailure } =
  homeTravelFilterSlice.actions;
export default homeTravelFilterSlice.reducer;
