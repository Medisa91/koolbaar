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
  },
});

export const { addNewUser } = registerSlice.actions;
export const showRegisterResult = (state) => state.register;
export default registerSlice.reducer;
