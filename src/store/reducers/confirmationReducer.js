import {
    ADD_CONFIRMATION_SUCCESS,
    ADD_CONFIRMATION_FAILURE,
    ADD_CONFIRMATION_STARTED
} from '../actions/types';

const initialState = {
    loading: false,
    confirmations: [],
    error: null
};

export default function confirmationsReducer(state = initialState , action) {
    switch ( action.type) {
        case ADD_CONFIRMATION_STARTED:
            return {
                ...state ,
                loading: true
            };
        case ADD_CONFIRMATION_SUCCESS:
            return {
                ...state ,
                loading: false,
                error: null,
                confirmations: [...state.confirmations , action.payload]
            };
        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}