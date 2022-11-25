import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: [],
  },
  reducers: {
    login: (state, action) => {
      state.data.push(action.payload);
    },
    loginFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { login, loginFailure } = loginSlice.actions;
export const showLoginResult = (state) => state.login;
export default loginSlice.reducer;
