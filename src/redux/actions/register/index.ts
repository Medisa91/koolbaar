import AuthorizationService from "services/authorizationService";
import { addNewUser } from "redux/slices/register";
import { toast } from "react-toastify";

export const createUser = (data) => async (dispatch) => {
  try {
    // const body = new FormData();
    // body.append("file", data);
    const res = await AuthorizationService.create(data);
    dispatch(addNewUser(res.data));
    toast.success("The operation was successful");
  } catch (err) {
    toast.error("Error");
    // throw new Error(err);
  }
};
