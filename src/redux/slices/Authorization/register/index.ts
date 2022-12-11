import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {},
  reducers: {
    addNewUser: (state, action) => {
      return (state = action.payload.data);
    },
    registerFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { addNewUser, registerFailure } = registerSlice.actions;
export const showRegisterResult = (state) => state.register;
export default registerSlice.reducer;
