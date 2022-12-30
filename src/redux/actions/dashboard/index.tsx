import DashboardService from "services/dashboardService";
import {
  userDashboard,
  userDashboardFailure,
} from "redux/slices/dashboard/userDashboard";
import {
  getChangedStatus,
  getChangedStatusFailure,
} from "redux/slices/dashboard/getChangedStatus";
import {
  changeOfferStatus,
  changeOfferStatusFailure,
} from "redux/slices/dashboard/changeOfferStatus";
import {
  changeRequestStatus,
  changeRequestStatusFailure,
} from "redux/slices/dashboard/changeRequestStatus";
import {
  sendAgreement,
  sendAgreementFailure,
} from "redux/slices/dashboard/sendAgreement";
import { toast } from "react-toastify";

export const getAllDashboardData = () => async (dispatch) => {
  try {
    const res = await DashboardService.getDashboard();
    dispatch(userDashboard(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
    dispatch(userDashboardFailure(err?.response));
  }
};

export const getAllStatusChanges = () => async (dispatch) => {
  try {
    const res = await DashboardService.getAllChangedStatus();
    dispatch(getChangedStatus(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
    dispatch(getChangedStatusFailure(err?.response));
  }
};

export const alterOfferStatus = (data) => async (dispatch) => {
  try {
    const res = await DashboardService.changeOfferStatus(data);
    dispatch(changeOfferStatus(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
    dispatch(changeOfferStatusFailure(err?.response));
  }
};

export const alterRequestStatus = (data) => async (dispatch) => {
  try {
    const res = await DashboardService.changeRequestStatus(data);
    dispatch(changeRequestStatus(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
    dispatch(changeRequestStatusFailure(err?.response));
  }
};

export const sendUserAgreement = (data) => async (dispatch) => {
  try {
    const res = await DashboardService.sendUserAgreement(data);
    dispatch(sendAgreement(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
    dispatch(sendAgreementFailure(err?.response));
  }
};
