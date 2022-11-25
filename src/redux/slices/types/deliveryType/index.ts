import { createSlice } from "@reduxjs/toolkit";

export const deliveryTypeSlice = createSlice({
  name: "deliveryType",
  initialState: [],
  reducers: {
    getDeliveryType: (state, action) => {
      return (state = action.payload.data);
    },
    deliveryTypeFailure: (state, action) => {
      return action.payload;
    },
  },
});

export const { getDeliveryType, deliveryTypeFailure } =
  deliveryTypeSlice.actions;
export default deliveryTypeSlice.reducer;
