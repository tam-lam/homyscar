import * as actions from "../../store/actions/types";
import rentalReducer from "../../store/reducers/rentalReducer";
import {mockRentals , mockUserRentals} from "../../util/mockItems";

const expectedState = {
    loading: false,
    rentals: [],
    error: null,
    fetching: false,
    fetchedRentals: null,
    inactiveRentals: [],
    activeRentals: []

}

describe('Rental reducer', () => {

    it('Undefined rental action should not modify state', () => {
        var newState = rentalReducer(undefined, {});
        expect(newState).toEqual(expectedState);
    });

    it('requesting cars action to change state of fetching to true', () => {
        var newState = rentalReducer(expectedState, {
            type: actions.REQUEST_RENTAL
        });
        expect(newState.fetching).toEqual(true);
    });

    it('requesting cars action to change state of fetching to true', () => {
        var newState = rentalReducer(expectedState, {
            type: actions.REQUEST_RENTAL
        });
        expect(newState.fetching).toEqual(true);
    });

    it('if there is error in fetching rentals , state should contain the error', () => {

        var action = {
            type: actions.RECIEVE_RENTAL_ERROR,
            payload: "error in fetching"
        }

        var newState = rentalReducer(expectedState, action);
        expect(newState.error).toEqual(action.payload);
    });

    
    it('inactive rentals should be populated with all inactive rentals recieved', () => {

        var action = {
            type: actions.RECIEVE_ALL_RENTALS,
            payload: mockRentals
        }

        var newState = rentalReducer(expectedState, action);
        expect(newState.inactiveRentals).toEqual(action.payload.filter(rental => rental.on_rent === false));
    });

    it('active rentals should be populated with all active rentals recieved', () => {

        var action = {
            type: actions.RECIEVE_ALL_RENTALS,
            payload: mockRentals
        }

        var newState = rentalReducer(expectedState, action);
        expect(newState.activeRentals).toEqual(action.payload.filter(rental => rental.on_rent === true));
    });

    it('user rentals should be equivalent to rentals recieved', () => {

        var action = {
            type: actions.RECIEVE_RENTAL,
            payload: mockUserRentals
        }

        var newState = rentalReducer(expectedState, action);
        expect(newState.fetchedRentals).toEqual(action.payload);
    });

    it('loading should be truen and requesting to add a rental', () => {

        var action = {
            type: actions.ADD_RENTAL_STARTED,
        }

        var newState = rentalReducer(expectedState, action);
        expect(newState.loading).toEqual(true);
    });

});
