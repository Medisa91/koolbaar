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
} from "redux/slices";

const rootReducer = combineReducers({
  counter,
  register,
  packageTypes,
  login,
  logout,
  checkToken,
  weightRange,
  deliveryType
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
