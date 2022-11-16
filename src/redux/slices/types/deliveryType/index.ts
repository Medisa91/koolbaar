import { createSlice } from "@reduxjs/toolkit";

export const deliveryTypeSlice = createSlice({
  name: "deliveryType",
  initialState: [],
  reducers: {
    getDeliveryType: (state, action) => {
      return (state = action.payload.data);
    },
  },
});

export const { getDeliveryType } = deliveryTypeSlice.actions;
export const showDeliveryType = (state) => state.deliveryType;
export default deliveryTypeSlice.reducer;
