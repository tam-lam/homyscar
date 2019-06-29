import {
  FETCH_CARS_WITH_DIST,
  SAVE_SELECTED_CAR_IN_STORE,
  SAVE_SELECTED_CAR_DISTANCE_IN_STORE,
  FETCH_ERROR_OCCUR,
  SAVE_CHECKOUT_CAR,
  DELETE_CHECKOUT_CAR,
  RECIEVE_CARS_WITH_DIST,
  REQUEST_CARS,
  RECIEVE_CARS,
  RECIEVE_CARS_ERROR,
<<<<<<< HEAD
  UPDATE_CAR,
  DELETE_CAR
} from "./types";
import axios from 'axios';
=======
  UPDATE_CAR
} from "./types";
import axios from 'axios';
import { notifyAddCarSucceeded, notifyAddCarFailed } from "../../components/ToastContent";


>>>>>>> feature_add_car


export const fetchCarsWithDist = () => dispatch => {
  fetch("/getcarswithdistance")
    .then(res => res.json())
    .then(cars =>
      dispatch({
        type: FETCH_CARS_WITH_DIST,
        payload: cars
      })
    )
    .catch(function(error) {
      console.log("ERROR:" + error);
      dispatch({ type: FETCH_ERROR_OCCUR, payload: error });
    });
};
export const saveSelectedCarInStore = selectedCar => dispatch => {
  selectedCar = JSON.parse(JSON.stringify(selectedCar));
  dispatch({ type: SAVE_SELECTED_CAR_IN_STORE, payload: selectedCar });
};
export const saveCheckoutCar = (checkoutCar, checkoutDistance) => dispatch => {
  sessionStorage.setItem("checkoutCar", JSON.stringify(checkoutCar));

  sessionStorage.setItem("checkoutDistance", checkoutDistance);
  console.log(
    "Checkout distance: " + sessionStorage.getItem("checkoutDistance")
  );

  dispatch({ type: SAVE_CHECKOUT_CAR });
};
export const saveSelectedCarDistanceInStore = distance => dispatch => {
  dispatch({ type: SAVE_SELECTED_CAR_DISTANCE_IN_STORE, payload: distance });
};
export const deleteCheckoutCar = () => dispatch => {
  console.log("deleting checkout car");
  sessionStorage.removeItem("checkoutCar");
  sessionStorage.removeItem("checkoutDistance");
  dispatch({ type: DELETE_CHECKOUT_CAR });
};

export function fetchCars() {
  return function(dispatch) {
    dispatch(requestCars());

    fetch(`/getcarswithdistance`)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(cars => dispatch(recieveCarsWithDist(cars)));
  };
}

export function fetchAllCars(){

  return dispatch => {
    dispatch(requestCars())
<<<<<<< HEAD
    alert('requesting cars')
=======
>>>>>>> feature_add_car

    axios.get('/car')
    .then(res => dispatch(recieveCars(res.data)))
    .catch(err => dispatch(recieveCarsError(err)))
  }
}

export function updateCarDetails(updated_data){

  return dispatch => {
    dispatch(updateCar())

    console.log('store ' , updated_data)
    axios.post('/updateCar' , {data: updated_data})
  }
<<<<<<< HEAD
}

export function deleteCar(car_id){
  return dispatch => {
    dispatch(removeCar())


    axios.delete('/deleteCar' , {params: {
      car_id: car_id
    } })
  }
}



=======

}

>>>>>>> feature_add_car
export function requestCars(){
  return {
    type: REQUEST_CARS
  }
}

export function recieveCars(cars){
  return {
    type: RECIEVE_CARS,
    payload: cars
  }
}

export function recieveCarsError(error){
  return {
    type: RECIEVE_CARS_ERROR,
    payload: error
  }
}

export function recieveCarsWithDist(cars) {
  return {
    type: RECIEVE_CARS_WITH_DIST,
    payload: cars
  };
}

export function updateCar(){
  return {
    type: UPDATE_CAR
  }
}

<<<<<<< HEAD
export function removeCar(){
  return {
    type: DELETE_CAR
  }
=======
export const addCar = (car) => (dispatch) => {

  axios
    .post("/car", car)
    .then( res => {
      notifyAddCarSucceeded();
    })
    .catch( err => {
      notifyAddCarFailed();
    })
>>>>>>> feature_add_car
}
