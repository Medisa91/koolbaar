import AuthorizationService from "services/authorizationService";
import { addNewUser } from "redux/slices/register";
import { toast } from "react-toastify";

export const createUser = (data) => async (dispatch) => {
  try {
    const body = new FormData();
    body.append("file", data);
    const res = await AuthorizationService.createUser(data);
    dispatch(addNewUser(res.data));
    if (res?.data?.IsSuccess) toast.success(res?.data?.Message);
    else toast.error(res?.data?.Message);
  } catch (err) {
    toast.error("Error");
    // throw new Error(err);
  }
};
