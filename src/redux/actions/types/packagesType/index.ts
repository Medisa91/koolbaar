import TypesService from "services/typesService";
import { getPackagesType } from "redux/slices/types/packagesType";
import { toast } from "react-toastify";

export const getAllPackagesType = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllPackagesType();
    dispatch(getPackagesType(res.data));
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
