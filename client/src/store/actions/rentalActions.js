import {
  ADD_RENTAL_SUCCESS,
  ADD_RENTAL_FAILURE,
  ADD_RENTAL_STARTED,
  REQUEST_RENTAL,
  RECIEVE_RENTAL,
  RETURN_RENTAL,
  RECIEVE_ALL_RENTALS,
  RECIEVE_RENTAL_ERROR
} from "./types";
import axios from "axios";
import { notifyConfirm } from "../../components/ToastContent";

export const addRental = ({ car_rego, user_id , payment_id , payer_id, price }) => {
  return dispatch => {
    dispatch(addRentalStarted());

    axios
      .post("/rental", {
        car_rego,
        user_id,
        payment_id,
        payer_id,
        price
      })
      .then(res => {
        dispatch(addRentalSuccess(res.data));
        
        notifyConfirm();

        axios.delete("/deleteConfirmation", {
          params: {
            rego: car_rego
          }
        });
      })
      .catch(error => {
        dispatch(addRentalFailure(error))
      });
  };
};

export const fetchRental = user_id => {
  return dispatch => {
    dispatch(requestRental());

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    // Request Body
    const body = JSON.stringify({ user_id: user_id });

    console.log(user_id)


    axios
      .get("/userRentals", {
          params: {
            user_id: user_id
          }
      })
      .then(res =>
        dispatch(recieveRental(res.data))
      )
      .catch(error => dispatch(receiveRentalError(error)));
      
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

            axios.post("/updateRental",{ data: update_rental_data});

            axios.post("/updateCar" , { data: update_car_data} )


        } 
      }

        
export const fetchAllRentals = () => {
    return dispatch => {
        dispatch(requestRental())

        axios.get('/rental')
        .then(res => dispatch(recieveAllRentals(res.data)))
        .catch(error => dispatch(receiveRentalError(error.message)))
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
const recieveAllRentals = rentals => ({
    type: RECIEVE_ALL_RENTALS,
    payload: rentals
})

const receiveRentalError = error => ({
    type: RECIEVE_RENTAL_ERROR,
    payload: error
})



