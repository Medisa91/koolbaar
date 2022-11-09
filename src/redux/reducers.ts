import { combineReducers } from "redux";
import { counter, register, packageTypes } from "redux/slices";

const rootReducer = combineReducers({ counter, register, packageTypes });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
