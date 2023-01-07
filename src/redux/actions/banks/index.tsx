import BanksService from "services/banksService";
import {
  bankAccounts,
  bankAccountsFailure,
} from "redux/slices/banks/bankAccount";
import {
  addBankAccount,
  addBankAccountFailure,
} from "redux/slices/banks/addBankAccount";
import {
  editAccount,
  editAccountFailure,
} from "redux/slices/banks/editBankAount";
import {
  deleteAccount,
  deleteAccountFailure,
} from "redux/slices/banks/deleteBankAccount";
import { gateways, gatewaysFailure } from "redux/slices/banks/gateways";
import { toast } from "react-toastify";

export const getAllBankAccounts = () => async (dispatch) => {
  try {
    const res = await BanksService.getAllBankAccounts();
    dispatch(bankAccounts(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    dispatch(bankAccountsFailure(err?.response));
    toast.error(err?.response?.data?.message);
  }
};

export const getAllGateways = () => async (dispatch) => {
  try {
    const res = await BanksService.getAllGateways();
    dispatch(gateways(res.data));
    if (!res?.data?.isSuccess) toast.error(res?.data?.message);
  } catch (err) {
    dispatch(gatewaysFailure(err?.response));
    toast.error(err?.response?.data?.message);
  }
};

export const addNewBankAccount = (data) => async (dispatch) => {
    try {
      const res = await BanksService.addNewBankAccount(data);
      dispatch(addBankAccount(res.data));
      if (!res?.data?.isSuccess) toast.error(res?.data?.message);
    } catch (err) {
      dispatch(addBankAccountFailure(err?.response));
      toast.error(err?.response?.data?.message);
    }
  };
  
  export const editBankAccount = (data) => async (dispatch) => {
    try {
      const res = await BanksService.editBankAccount(data);
      dispatch(editAccount(res.data));
      if (!res?.data?.isSuccess) toast.error(res?.data?.message);
    } catch (err) {
      dispatch(editAccountFailure(err?.response));
      toast.error(err?.response?.data?.message);
    }
  };
  
  export const deleteBankAccount = (id) => async (dispatch) => {
    try {
      const res = await BanksService.deleteBankAccount(id);
      dispatch(deleteAccount(res.data));
      if (!res?.data?.isSuccess) toast.error(res?.data?.message);
    } catch (err) {
      dispatch(deleteAccountFailure(err?.response));
      toast.error(err?.response?.data?.message);
    }
  };