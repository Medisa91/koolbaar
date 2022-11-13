import AuthorizationService from "services/authorizationService";
import { login } from "redux/slices/login";
import { toast } from "react-toastify";

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await AuthorizationService.login(data);
    dispatch(login(res.data));
    localStorage.setItem("token", data?.data?.access_token);
    localStorage.setItem("expire", data?.data?.expires_in);
    localStorage.setItem("refreshToken", data?.data?.refresh_token);
    localStorage.setItem("tokenType", data?.data?.token_type);
    if (res?.data?.isSuccess) toast.success(res?.data?.message);
    else toast.error(res?.data?.message);
  } catch (err) {
    toast.error("Error");
  }
};
