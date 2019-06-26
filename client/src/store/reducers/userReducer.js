import {
    REQUEST_USERS,
    RECIEVE_USERS,
    RECIEVE_USERS_ERROR,
    DELETE_USER
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
        case DELETE_USER:
            let deletedUser = state.users_data.find(deletedUser => deletedUser._id == action.payload);
            if (deletedUser)
                state.users_data.splice(state.users_data.indexOf(deletedUser), 1)
            return {
                ...state,
                users_data: state.users_data
            }
        default:
        return state;
    }

}