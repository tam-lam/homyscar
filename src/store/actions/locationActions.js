import { SAVE_USER_LOCATION } from "./types";
export const saveUserLocation = (lat, lng) => dispatch => {
  var userLocation = {
    lat: lat,
    lng: lng
  };
  console.log("User LAT: " + userLocation.lat);
  dispatch({ type: SAVE_USER_LOCATION, payload: userLocation });
};
