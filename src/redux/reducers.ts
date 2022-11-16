import { combineReducers } from "redux";
import {
  counter,
  register,
  packageTypes,
  login,
  logout,
  checkToken,
  weightRange,
  deliveryType,
  flightInquiry
} from "redux/slices";

const rootReducer = combineReducers({
  counter,
  register,
  packageTypes,
  login,
  logout,
  checkToken,
  weightRange,
  deliveryType,
  flightInquiry
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
