import AuthorizationService from "services/authorizationService";
import { login } from "redux/slices/Authorization/login";
import { toast } from "react-toastify";

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await AuthorizationService.login(data);    
    if (res?.data?.isSuccess) toast.success(res?.data?.message);
    else toast.error(res?.data?.message);
    dispatch(login(res.data));
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
