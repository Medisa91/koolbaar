import { combineReducers } from "redux";
import {
  counter,
  register,
  packageTypes,
  login,
  logout,
  checkToken,
  weightRange,
  sizeRange,
  deliveryType,
  flightInquiry,
  homeRequestFilter,
  homeTravelFilter,
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
  sizeRange,
  deliveryType,
  flightInquiry,
  homeRequestFilter,
  homeTravelFilter,
  userInfo,
  travelRequestHomeRequest
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
