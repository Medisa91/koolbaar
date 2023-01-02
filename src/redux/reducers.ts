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
  editUserInfo,
  travelRequestHomeRequest,
  userDashboard,
  changeOfferStatus,
  changeRequestStatus,
  getChangedStatus,
  sendAgreement,
  addTravel,
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
  editUserInfo,
  travelRequestHomeRequest,
  userDashboard,
  changeOfferStatus,
  changeRequestStatus,
  getChangedStatus,
  sendAgreement,
  addTravel,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
