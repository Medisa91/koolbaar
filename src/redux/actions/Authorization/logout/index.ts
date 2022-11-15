import AuthorizationService from "services/authorizationService";
import { logout } from "redux/slices/Authorization/logout";
import { toast } from "react-toastify";

export const logoutUser = (data) => async (dispatch) => {
  try {
    const res = await AuthorizationService.logout(data);
    dispatch(logout(res.data));

    if (res?.data?.isSuccess) {
      toast.success(res?.data?.message);      
    } else toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
