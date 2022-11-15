import TypesService from "services/typesService";
import { getWeightRanges } from "redux/slices/types/weightRange";
import { toast } from "react-toastify";

export const getAllWeightRange = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllWeightRange();
    dispatch(getWeightRanges(res.data));
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
