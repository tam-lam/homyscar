import * as actions from "../../store/actions/types";
import carReducer from "../../store/reducers/carReducer";


var expectedState = { 
    items: [],
    allCars: [],
    selectedCar: {},
    selectedDistance: "",
    doErrorExist: false,
    checkoutCar: null,
    checkoutDistance: null,
    isFetchingCars: false
}


describe('Car reducer', () => {

    it('Undefined car action should not modify state', () => {
        var newState = carReducer(undefined, {});
        expect(newState).toEqual(expectedState);
    });

    it('requesting cars should change state of fetchingCars boolean to true', () => {
        var newState = carReducer(expectedState, {
            type: actions.REQUEST_CARS
        });
        expect(newState.isFetchingCars).toEqual(true);
    });

    it('recieving cars should change state of fetchingCars boolean to false', () => {
        var newState = carReducer(expectedState, {
            type: actions.RECIEVE_CARS
        });
        expect(newState.isFetchingCars).toEqual(false);
    });

    it('error boolean to be true when error exists', () => {
        var newState = carReducer(expectedState, {
            type: actions.FETCH_ERROR_OCCUR,
            payload: true
        });
        expect(newState.doErrorExist).toEqual(true);
    });

    it('Car reducer items field state should contain same amount of objects as are sent it', () => {
        var newState = carReducer(expectedState, {
            type: actions.RECIEVE_CARS_WITH_DIST,
            payload: {
                    0: {},
                    1: {},
                }     
        });

        expect(Object.keys(newState.items).length).toEqual(2);
    });

    it('Car reducer allcars field state should contain same amount of objects as are sent it', () => {
        var newState = carReducer(expectedState, {
            type: actions.RECIEVE_CARS,
            payload: {
                    0: {},
                    1: {},
                }     
        });

        expect(Object.keys(newState.allCars).length).toEqual(2);
    });




});