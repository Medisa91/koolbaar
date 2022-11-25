import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    data: [],
  },
  reducers: {
    addNewUser: (state, action) => {
      state.data.push(action.payload);
    },
    registerFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { addNewUser, registerFailure } = registerSlice.actions;
export const showRegisterResult = (state) => state.register;
export default registerSlice.reducer;
