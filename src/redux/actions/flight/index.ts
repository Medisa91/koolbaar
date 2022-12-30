import FlightsService from "services/flightsService";
import {
  flightInquiry,
  flightInquiryFailure,
} from "redux/slices/flight/flightInquiry";
import { homeRequestFilter } from "redux/slices/flight/homeRequestFilter";
import { homeTravelFilter } from "redux/slices/flight/homeTravelFilter";
import { travelRequestHomeRequest } from "redux/slices/flight/homeRequestTravelInfo";
import { toast } from "react-toastify";

export const getFlightInquiry = (data) => async (dispatch) => {
  try {
    const res = await FlightsService.flightInquiry(data);
    dispatch(flightInquiry(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    dispatch(flightInquiryFailure(err?.response));
    toast.error(err?.response?.data?.message);
  }
};

export const getAllHomeRequestFilter = (data) => async (dispatch) => {
  try {
    const res = await FlightsService.getHomeFilter(data);
    dispatch(homeRequestFilter(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
export const getAllHomeTravelFilter = (data) => async (dispatch) => {
  try {
    const res = await FlightsService.getHomeFilter(data);
    dispatch(homeTravelFilter(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};

export const getAllTravelInfoHomeRequests = (data) => async (dispatch) => {
  try {
    const res = await FlightsService.getHomeRequestByTravelInfo(data);
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
    dispatch(travelRequestHomeRequest(res.data));
  } catch (err) {
    // dispatch(homeTravelerFailure(err?.response));
    toast.error(err?.response?.data?.message);
  }
};
