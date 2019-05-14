import { combineReducers } from "redux";
import carReducer from "./carReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";
import paymentReducer from "./paymentReducer";
export default combineReducers({
  cars: carReducer,
  error: errorReducer,
  auth: authReducer,
  location: locationReducer,
  payment: paymentReducer
});
