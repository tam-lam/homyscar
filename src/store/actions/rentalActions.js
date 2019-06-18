import {
  ADD_RENTAL_SUCCESS,
  ADD_RENTAL_FAILURE,
  ADD_RENTAL_STARTED,
  REQUEST_RENTAL,
  RECIEVE_RENTAL,
  RETURN_RENTAL
} from "./types";
import axios from "axios";

export const addRental = ({ car_rego, user_id }) => {
  return dispatch => {
    dispatch(addRentalStarted());

    axios
      .post("http://localhost:3001/rental", {
        car_rego,
        user_id
      })
      .then(res => {
        dispatch(addRentalSuccess(res.data));

        axios.delete("http://localhost:3001/deleteConfirmation", {
          params: {
            rego: car_rego
          }
        });
      })
      .catch(error => dispatch(addRentalFailure(error)));
  };
};

export const fetchRental = user_id => {
  return dispatch => {
    dispatch(requestRental());

    alert( user_id)

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    // Request Body
    const body = JSON.stringify({ user_id: user_id });

    console.log(user_id)


    axios
      .get("http://localhost:3001/userRentals", {
          params: {
            user_id: user_id
          }
      })
      .then(res =>
        dispatch(recieveRental(res.data))
      )
      .catch(error => {
        console.log("error in retrieving rental", error.message)
      });
      
  };
};

export const deleteRental = (return_item , address_info) => {
        return dispatch => {
            dispatch(returnRental())
            
            console.log('return item is ' , return_item)
            console.log('address info is' , address_info)
            // return rental datas
            var update_rental_data = {
                rental_id : return_item._id ,
                return_location: address_info.address,
                return_date: new Date(),
                total_price: 56,
                on_rent: false
            }

            console.log('update_rental_data is' , update_rental_data)


            var update_car_data = {
                availability: true,
                car_rego: return_item.car_rego,
                address: address_info.address,
                lat: address_info.latitude,
                lng: address_info.longitude
            }

            axios.post("http://localhost:3001/updateRental",{ data: update_rental_data});

            axios.post("http://localhost:3001/updateCar" , { data: update_car_data} )


        } 

        
}



const addRentalStarted = () => ({
  type: ADD_RENTAL_STARTED
});

const addRentalSuccess = rental => ({
  type: ADD_RENTAL_SUCCESS,
  payload: rental
});

const addRentalFailure = error => ({
  type: ADD_RENTAL_FAILURE,
  payload: error
});

const requestRental = () => ({
  type: REQUEST_RENTAL 
});

const recieveRental = rental => ({
  type: RECIEVE_RENTAL,
  payload: rental
});

const returnRental = () => ({
    type: RETURN_RENTAL
})
