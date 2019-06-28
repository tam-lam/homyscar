import * as actions from "../../store/actions/types";
import userReducer from "../../store/reducers/userReducer";
import {mockUsers} from "../../util/mockItems";

const expectedState = {
    fetching: false,
    users_data: [],
    error: null
}


describe('User reducer', () => {

    it('Undefined user state should not change state ', () => {
        var newState = userReducer(undefined, {});
        expect(newState).toEqual(expectedState);
    });

    it('when requesting user , fetching should change to true ', () => {

        var action = {
            type: actions.REQUEST_USERS
        }
        var newState = userReducer(expectedState, action);
        expect(newState.fetching).toEqual(true);
    });

   
    it('users in state should equal to the action payload sent to store', () => {

        var action = {
            type: actions.RECIEVE_USERS,
            payload: mockUsers
        }
        var newState = userReducer(expectedState, action);
        expect(newState.users_data).toEqual(action.payload);
    });

    it('if error occurs while receiving users , register error in state', () => {

        var action = {
            type: actions.RECIEVE_USERS_ERROR,
            payload: "error in recieving user"
        }
        var newState = userReducer(expectedState, action);
        expect(newState.error).toEqual(action.payload);
    });

});