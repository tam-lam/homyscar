import { SAVE_USER_LOCATION } from "./types";
import axios from "axios";
export const saveUserLocation = (latitude, longitude) => dispatch => {
console.log('location is ' , latitude);
//   axios.post("http://localhost:3001/setlocation", {
//             lat: latitude,
//             lng: longitude
//           }).then( res =>
//           console.log(res),

// );

// dispatch({ type: SAVE_USER_LOCATION, payload: { lat:latitude , lng: longitude} })

dispatch({ type: SAVE_USER_LOCATION, payload: { lat:latitude , lng: longitude} })

axios.post("http://localhost:3001/setlocation", {
         lat:latitude , 
         lng: longitude// data can be `string` or {object}!
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));

};


