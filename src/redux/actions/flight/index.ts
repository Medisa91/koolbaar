import FlightsService from "services/flights";
import { flightInquiry } from "redux/slices/flight";
import { toast } from "react-toastify";

export const getFlightInquiry = (data) => async (dispatch) => {
  try {
    const res = await FlightsService.flightInquiry(data);    
    if (res?.data?.isSuccess) toast.success(res?.data?.message);
    else toast.error(res?.data?.message);
    dispatch(flightInquiry(res.data));
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};