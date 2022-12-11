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
  flightInquiry,
  homeRequest,
  homeTraveler,
  userInfo,
  travelRequestHomeRequest
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
  flightInquiry,
  homeRequest,
  homeTraveler,
  userInfo,
  travelRequestHomeRequest
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
