import {
  FETCH_CARS_WITH_DIST,
  SAVE_SELECTED_CAR_IN_STORE,
  SAVE_SELECTED_CAR_DISTANCE_IN_STORE,
  FETCH_ERROR_OCCUR,
  SAVE_CHECKOUT_CAR
} from "../actions/types";

const initialState = {
  items: [],
  selectedCar: {},
  selectedDistance: "",
  doErrorExist: false,
  checkoutCar: JSON.parse(sessionStorage.getItem("checkoutCar")),
  checkoutDistance: sessionStorage.getItem("checkoutDistance")
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS_WITH_DIST:
      return {
        ...state,
        items: action.payload
      };
    case SAVE_SELECTED_CAR_IN_STORE:
      return {
        ...state,
        selectedCar: action.payload
      };
    case SAVE_SELECTED_CAR_DISTANCE_IN_STORE:
      return {
        ...state,
        selectedCarDistance: action.payload
      };
    case FETCH_ERROR_OCCUR:
      return {
        ...state,
        doErrorExist: action.payload
      };
    case SAVE_CHECKOUT_CAR:
      return {
        ...state,
        checkoutCar: JSON.parse(sessionStorage.getItem("checkoutCar")),
        selectedDistance: sessionStorage.getItem("selectedDistance")
      };
    default:
      return state;
  }
}
