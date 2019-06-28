import * as actions from "../../store/actions/types";
import confirmationReducer from "../../store/reducers/confirmationReducer";
import {mockConfirmation} from "../../util/mockItems";


const expectedState = {
    loading: false,
    confirmations: [],
    error: null,
    requestingConfirmations: false,
    recievedConfirmations: null
};

describe('Confirmation reducer', () => {

    it('Undefined confirmation ', () => {
        var newState = confirmationReducer(undefined, {});
        expect(newState).toEqual(expectedState);
    });


    it('when requesting a confirmation , requestingConfirmations field should change to true ', () => {
        var action = {
            type: actions.REQUEST_CONFIRMATIONS
        }
        var newState = confirmationReducer(expectedState, action);
        expect(newState.requestingConfirmations).toEqual(true);
    });

    it('state confirmations should equal recieved confirmations ', () => {
        var action = {
            type: actions.RECIEVE_CONFIRMATIONS,
            payload: mockConfirmation
        }
        var newState = confirmationReducer(expectedState, action);
        expect(newState.recievedConfirmations).toEqual(action.payload);
    });

    it('if an error occurs while attempting to add a confirmation , ensure states registers the error ', () => {
        var action = {
            type: actions.ADD_CONFIRMATION_FAILURE,
            payload: {error: "error in adding confirmation"}
        }
        var newState = confirmationReducer(expectedState, action);
        expect(newState.error).toEqual(action.payload.error);
        expect(newState.loading).toEqual(false);
    });

    it('loading in state should change to false when an error occurs ', () => {
        var action = {
            type: actions.ADD_CONFIRMATION_FAILURE,
            payload: {error: "error in adding confirmation"}
        }
        var newState = confirmationReducer(expectedState, action);
        expect(newState.loading).toEqual(false);
    });

});
