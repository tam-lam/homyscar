import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = applyMiddleware( thunk );

const composedEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )|| compose;

const store = createStore( rootReducer, initialState, 
    composedEnhancers(middleware)
);

export default store;