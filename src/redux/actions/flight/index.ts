import FlightsService from "services/flights";
import {
  flightInquiry,
  flightInquiryFailure,
} from "redux/slices/flight/flightInquiry";
import { homeRequest } from "redux/slices/flight/homeRequest";
import { homeTraveler } from "redux/slices/flight/homeTraveler";
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

export const getAllHomeRequest = (data) => async (dispatch) => {
  try {
    const res = await FlightsService.getHomeRequest(data);
    dispatch(homeRequest(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};

export const getAllHomeTraveler = (data) => async (dispatch) => {
  try {
    const res = await FlightsService.getHomeTraveler(data);
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
    dispatch(homeTraveler(res.data));
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
