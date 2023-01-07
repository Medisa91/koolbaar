import { createSlice } from "@reduxjs/toolkit";

export const requestTimelineSlice = createSlice({
  name: "requestTimeline",
  initialState: [],
  reducers: {
    requestTimeline: (state, action) => {
      return (state = action.payload.data);
    },
    requestTimelineFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { requestTimeline, requestTimelineFailure } =
requestTimelineSlice.actions;
export default requestTimelineSlice.reducer;
