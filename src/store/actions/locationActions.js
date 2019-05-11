import { SAVE_USER_LOCATION } from "./types";
export const saveUserLocation = (lat, lng) => dispatch => {
  var userLocation = {
    lat: lat,
    lng: lng
  };
  dispatch({ type: SAVE_USER_LOCATION, payload: userLocation });
};
