import AuthorizationService from "services/authorizationService";
import { login, loginFailure } from "redux/slices/authorization/login";
import { logout } from "redux/slices/authorization/logout";
import { editUserInfo, editUserInfoFailure } from "redux/slices/authorization/editUserInfo";
import {
  checkToken,
  checkTokenFailure,
} from "redux/slices/authorization/externalLogin";
import {
  addNewUser,
  registerFailure,
} from "redux/slices/authorization/register";
import {
  getUserProfile,
  profileFailure,
} from "redux/slices/authorization/userInfo";
import { toast } from "react-toastify";

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await AuthorizationService.login(data);
    if (res?.data?.isSuccess) toast.success(res?.data?.message);
    else toast.error(res?.data?.message);
    dispatch(login(res.data));
  } catch (err) {
    dispatch(loginFailure(err?.response));
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
    dispatch(logout(err?.response));
    // toast.error(err?.response?.data?.message);
  }
};

export const externalLoginUser = (data) => async (dispatch) => {
  try {
    const res = await AuthorizationService.checkToken(data);
    if (
      res?.data?.data?.isRegistered === false &&
      res?.data?.data?.isValid === false
    ) {
      toast.error("The entered information is incorrect");
    } else if (
      res?.data?.data?.isRegistered === false &&
      res?.data?.data?.isValid === true
    ) {
      dispatch(checkToken(res.data));
    } else{
      dispatch(checkToken(res?.data))
    }
  } catch (err) {
    dispatch(checkTokenFailure(err?.response));
    toast.error(err?.response?.data?.message);
  }
};

export const createUser = (data) => async (dispatch) => {
  try {
    const res = await AuthorizationService.createUser(data);
    if (!res?.data?.isSuccess) {
      toast.error(res?.data?.message);
      return;
    }
    dispatch(addNewUser(res.data));
  } catch (err) {
    dispatch(registerFailure(err?.response));
    toast.error(err?.response?.data?.message);
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const res = await AuthorizationService.getUserInfo();
    dispatch(getUserProfile(res.data));
  } catch (err) {
    dispatch(profileFailure(err?.response));
    toast.error(err?.response?.data?.message);
  }
};

export const modifyUserInfo = (data) => async (dispatch) => {
  try {
    const res = await AuthorizationService.editUserInfo(data);
    dispatch(editUserInfo(res.data));
  } catch (err) {
    dispatch(editUserInfoFailure(err?.response));
    toast.error(err?.response?.data?.message);
  }
};
