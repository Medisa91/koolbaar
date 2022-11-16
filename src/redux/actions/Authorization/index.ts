import AuthorizationService from "services/authorizationService";
import { login } from "redux/slices/Authorization/login";
import { logout } from "redux/slices/Authorization/logout";
import { checkToken } from "redux/slices/Authorization/externalLogin";
import { addNewUser } from "redux/slices/Authorization/register";
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

export const externalLoginUser = (data) => async (dispatch) => {
  try {
    const res = await AuthorizationService.checkToken(data);
    dispatch(checkToken(res.data));
    if (res?.data?.isSuccess) toast.success(res?.data?.message);
    else toast.error(res?.data?.message);
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};


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



