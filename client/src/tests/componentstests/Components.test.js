import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import AdminMenu from '../../components/AdminMenu';
import { findByTestAtrr } from '../../util/redux_test_config';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('AdminMenu Component Should render correctly', () => {
    let sampelErrorMessage = "sample error message"
    let component = shallow(
    <Provider store={store}>
        <AdminMenu />
    </Provider>);

    it('AdminMenu div Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'adminContainer');
        expect(wrapper.length).toBe(1);
    });

});