import {
        ADD_RENTAL_SUCCESS,
        ADD_RENTAL_FAILURE,
        ADD_RENTAL_STARTED,
        REQUEST_RENTAL,
        RECIEVE_RENTAL,
        RETURN_RENTAL
} from '../actions/types';
import { stat } from 'fs';

const initialState = {
        loading: false,
        rentals: [],
        error: null,
        fetching: false,
        fetchedRentals: null
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
                return state;
                default:
                return state;
        }

}