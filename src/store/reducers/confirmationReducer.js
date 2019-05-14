import {
    ADD_CONFIRMATION_SUCCESS,
    ADD_CONFIRMATION_FAILURE,
    ADD_CONFIRMATION_STARTED,
    REQUEST_CONFIRMATIONS,
    RECIEVE_CONFIRMATIONS
} from '../actions/types';

const initialState = {
    loading: false,
    confirmations: [],
    error: null,
    requestingConfirmations: false,
    recievedConfirmations: []
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
        case ADD_CONFIRMATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case REQUEST_CONFIRMATIONS:
            return {
                ...state,
                requestingConfirmations: true
            }
        case RECIEVE_CONFIRMATIONS:
            return {
                ...state,
                requestingConfirmations: false,
                recievedConfirmations: [... state.recievedConfirmations , action.payload]
            }
        default:
            return state;
    }
}