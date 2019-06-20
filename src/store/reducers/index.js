import { combineReducers } from "redux";
import carReducer from "./carReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";
import paymentReducer from "./paymentReducer";
import confirmationReducer from "./confirmationReducer";
import rentalsReducer from "./rentalReducer";
import rentalHistoryReducer from "./rentalHistoryReducer"
import usersReducer from "./userReducer";
export default combineReducers({
  cars: carReducer,
  error: errorReducer,
  auth: authReducer,
  location: locationReducer,
  payment: paymentReducer,
  confirmations: confirmationReducer,
  rentals: rentalsReducer,
  rentalHistory: rentalHistoryReducer,
  users: usersReducer
});
