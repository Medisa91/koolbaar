import AuthorizationService from "services/authorizationService";
import { addNewUser } from "redux/slices/Authorization/register";
import { toast } from "react-toastify";

export const createUser = (data) => async (dispatch) => {
  try {
    const body = new FormData();
    body.append("file", data);
    const res = await AuthorizationService.createUser(data);
    dispatch(addNewUser(res.data));
    if (res?.data?.isSuccess) toast.success(res?.data?.message);
    else toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
