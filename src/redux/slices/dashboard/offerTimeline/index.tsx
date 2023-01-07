import { createSlice } from "@reduxjs/toolkit";

export const offerTimelineSlice = createSlice({
  name: "offerTimeline",
  initialState: [],
  reducers: {
    offerTimeline: (state, action) => {
      return (state = action.payload.data);
    },
    offerTimelineFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { offerTimeline, offerTimelineFailure } =
offerTimelineSlice.actions;
export default offerTimelineSlice.reducer;
