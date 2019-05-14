import {
        ADD_RENTAL_SUCCESS,
        ADD_RENTAL_FAILURE,
        ADD_RENTAL_STARTED
} from '../actions/types';

const initialState = {
        loading: false,
        rentals: [],
        error: null
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
                }
                default:
                return state;
        }

}