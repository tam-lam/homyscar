import {
    ADD_CONFIRMATION_SUCCESS,
    ADD_CONFIRMATION_FAILURE,
    ADD_CONFIRMATION_STARTED
} from './types';
import axios from 'axios';

export const addConfirmation = ({rego , userId}) => {
    return dispatch => {
        dispatch(addConfirmationStarted());

        axios.post('http://localhost:3001/addConfirmation' , {
            rego,
            userId
        })
        .then(res => {
            dispatch(addConfirmationSuccess(res.data));
        })
        .catch(err => {
            dispatch(addConfirmationFailure(err.message));
        });
    };
};

const addConfirmationStarted = () => ({
    type: ADD_CONFIRMATION_STARTED
});

const addConfirmationSuccess = confirmation => ({
    type: ADD_CONFIRMATION_SUCCESS ,
    payload: {
        ...confirmation
    }
});

const addConfirmationFailure = error => ({
    type: ADD_CONFIRMATION_FAILURE,
    payload: {
        error
    }
});