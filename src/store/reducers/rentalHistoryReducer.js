import {
  RETRIEVE_RENTAL_HISTORY,
  CLEAR_RENTAL_HISTORY
} from "../actions/types";

const initialState = {
  my_rental_history: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_RENTAL_HISTORY:
      return {
        my_rental_history: action.payload
      }
    case CLEAR_RENTAL_HISTORY:
      return {
        my_rental_history: []
      }
    default:
      return state;
  }
}