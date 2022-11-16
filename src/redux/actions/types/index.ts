import TypesService from "services/typesService";
import { getPackagesType } from "redux/slices/types/packagesType";
import { getWeightRanges } from "redux/slices/types/weightRange";
import { getDeliveryType } from "redux/slices/types/deliveryType";
import { toast } from "react-toastify";

export const getAllDeliveryType = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllDeliveryType();
    dispatch(getDeliveryType(res.data));
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};

export const getAllPackagesType = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllPackagesType();
    dispatch(getPackagesType(res.data));
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};

export const getAllWeightRange = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllWeightRange();
    dispatch(getWeightRanges(res.data));
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};

