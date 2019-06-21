import {
    REQUEST_USERS,
    RECIEVE_USERS,
    RECIEVE_USERS_ERROR
} from '../actions/types';

const initialState = {
    fetching: false,
    users_data: [],
    error: null
}

export default function usersReducer(state = initialState , action){

    switch(action.type){
            case REQUEST_USERS:
            return {
                ...state,
                fetching: true
            };
            case RECIEVE_USERS:
                return {
                    ...state,
                    fetching: false,
                    users_data: action.payload
                };
            case RECIEVE_USERS_ERROR:
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
            default:
            return state;
    }

}