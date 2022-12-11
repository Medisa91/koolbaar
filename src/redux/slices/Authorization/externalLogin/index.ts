import { createSlice } from "@reduxjs/toolkit";

export const checkTokenSlice = createSlice({
  name: "checkToken",
  initialState: {
    data: {
      isValid: false,
      isRegistered: false,
      accessToken: "",
      personalPhoto: "",
      expiresIn: "",
      refreshToken: "",
      tokenType: "",
    },
  },
  reducers: {
    checkToken: (state, action) => {
      return action.payload;
    },
    checkTokenFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { checkToken, checkTokenFailure } = checkTokenSlice.actions;
export const showCheckTokenResult = (state) => state.checkToken;
export default checkTokenSlice.reducer;
