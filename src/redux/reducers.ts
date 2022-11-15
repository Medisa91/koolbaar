import { combineReducers } from "redux";
import {
  counter,
  register,
  packageTypes,
  login,
  logout,
  checkToken,
} from "redux/slices";

const rootReducer = combineReducers({
  counter,
  register,
  packageTypes,
  login,
  logout,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
