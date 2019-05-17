import {
    ADD_CONFIRMATION_SUCCESS,
    ADD_CONFIRMATION_FAILURE,
    ADD_CONFIRMATION_STARTED,
    REQUEST_CONFIRMATIONS,
    RECIEVE_CONFIRMATIONS
} from './types';
import axios from 'axios';

export const addConfirmation = ({rego , user_id}) => {
    return dispatch => {
        dispatch(addConfirmationStarted());
        // console.log('rego is ' , carRego);
        // console.log('userid is ' , userId);
        axios.post('http://localhost:3001/addConfirmation' , {
            rego,
            user_id
        })
        .then(res => {
            dispatch(addConfirmationSuccess(res.data));
        })
        .catch(err => {
            dispatch(addConfirmationFailure(err.message));
        });
    };
};

export const fetchConfirmations = (user_id) => {

    return dispatch => {
        console.log('client user id confirmations is' , user_id)
        dispatch(requestConfirmations(user_id));

        axios.get('http://localhost:3001/getConfirmation' , {
            params: {
                user_id: user_id
            }
        })
        .then(res => dispatch(recieveConfirmations(res.data))
        )
    }
}

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



const requestConfirmations = (user_id) => ({
    type: REQUEST_CONFIRMATIONS,
    payload: {
        user_id
    }
});

const recieveConfirmations = (confirmation) =>  ({
    type: RECIEVE_CONFIRMATIONS,
    payload: {
        confirmation
    }
});



// const fetchConfirmationStarted = () => ({
//     type: FETCH_CONFIRMATION_STARTED
// });

// const fetchConfirmationSuccess = () => ({
//     type: FETCH_CONFIRMATION_SUCCESS
// });

// const fetchConfirmationFailure = error => ({
//     type: FETCH_CONFIRMATION_FAILURE,
//     payload: {
//         error
//     }
// });