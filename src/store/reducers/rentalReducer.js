import {
        ADD_RENTAL_SUCCESS,
        ADD_RENTAL_FAILURE,
        ADD_RENTAL_STARTED,
        REQUEST_RENTAL,
        RECIEVE_RENTAL,
        RETURN_RENTAL,
        RECIEVE_ALL_RENTALS,
        RECIEVE_RENTAL_ERROR
} from '../actions/types';
import { stat } from 'fs';

const initialState = {
        loading: false,
        rentals: [],
        error: null,
        fetching: false,
        fetchedRentals: null,
        inactiveRentals: [],
        activeRentals: []

}

export default function rentalsReducer(state = initialState , action){

        switch(action.type){
                case ADD_RENTAL_STARTED:
                return{
                        ...state,
                        loading: true
                };
                case ADD_RENTAL_SUCCESS:
                return {
                        ...state,
                        loading: false,
                        rentals: [...state.rentals, action.payload]
                };
                case ADD_RENTAL_FAILURE:
                return {
                        ...state,
                        error: action.payload
                };
                case REQUEST_RENTAL:
                return {
                        ...state,
                        fetching: true
                };
                case RECIEVE_RENTAL:
                return {
                        ...state,
                        fetching: false,
                        fetchedRentals: action.payload   
                };
                case RETURN_RENTAL:
                return {
                        ...state,
                        fetchedRentals: action.payload    
                }
                case RECIEVE_ALL_RENTALS:
                return {
                        ...state,
                        fetching: false,
                        inactiveRentals: action.payload.filter(rental => rental.on_rent === false),
                        activeRentals: action.payload.filter(rental => rental.on_rent === true)
                }
                case RECIEVE_RENTAL_ERROR:
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
                default:
                return state;
        }

}