import { combineReducers } from "redux";
import carReducer from "./carReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";
export default combineReducers({
  cars: carReducer,
  error: errorReducer,
  auth: authReducer,
  location: locationReducer
});
