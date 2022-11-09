import TypesService from "services/typesService";
import { getPackagesType } from "redux/slices/types";

export const getAllPackagesType = () => async (dispatch) => {
  try {
    const res = await TypesService.getAllPackagesType();
    dispatch(getPackagesType(res.data));
  } catch (err) {
    throw new Error(err);
  }
};
