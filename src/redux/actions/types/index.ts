import TypesService from "services/typesService";
import {
  getPackagesType,
  packagesTypeFailure,
} from "redux/slices/types/packagesType";
import {
  getWeightRanges,
  weightRangeFailure,
} from "redux/slices/types/weightRange";
import {
  getDeliveryType,
  deliveryTypeFailure,
} from "redux/slices/types/deliveryType";
import {
  getSizeRanges,
  sizeRangeFailure,
} from "redux/slices/types/sizeRange";
// import { toast } from "react-toastify";

export const getAllDeliveryType = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllDeliveryType();
    dispatch(getDeliveryType(res.data));
  } catch (err) {
    dispatch(deliveryTypeFailure(err?.response));
    // toast.error(err?.response?.data?.message);
  }
};

export const getAllPackagesType = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllPackagesType();
    dispatch(getPackagesType(res.data));
  } catch (err) {
    dispatch(packagesTypeFailure(err?.response));
    // toast.error(err?.response?.data?.message);
  }
};

export const getAllWeightRange = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllWeightRange();
    dispatch(getWeightRanges(res.data));
  } catch (err) {
    dispatch(weightRangeFailure(err?.response));
    // toast.error(err?.response?.data?.message);
  }
};

export const getAllSizeRange = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllSizeRange();
    dispatch(getSizeRanges(res.data));
  } catch (err) {
    dispatch(sizeRangeFailure(err?.response));
    // toast.error(err?.response?.data?.message);
  }
};
