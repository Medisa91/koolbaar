import TypesService from "services/typesService";
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
