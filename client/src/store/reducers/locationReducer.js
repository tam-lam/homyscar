import { SAVE_USER_LOCATION } from "../actions/types";

const initialState = {
  userLocation: {
    lat: 0,
    lng: 0
  }
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload
      };
    default:
      return state;
  }
}
