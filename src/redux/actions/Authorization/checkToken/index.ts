import AuthorizationService from "services/authorizationService";
import { checkToken } from "redux/slices/Authorization/externalLogin";
import { toast } from "react-toastify";

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await AuthorizationService.checkToken(data);
    dispatch(checkToken(res.data));
    if (res?.data?.isSuccess) toast.success(res?.data?.message);
    else toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
