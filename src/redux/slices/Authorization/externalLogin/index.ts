import { createSlice } from "@reduxjs/toolkit";

export const checkTokenSlice = createSlice({
  name: "checkToken",
  initialState: {
    data: [],
  },
  reducers: {
    checkToken: (state, action) => {
      state.data.push(action.payload);
    },
    checkTokenFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { checkToken, checkTokenFailure } = checkTokenSlice.actions;
export const showCheckTokenResult = (state) => state.checkToken;
export default checkTokenSlice.reducer;
