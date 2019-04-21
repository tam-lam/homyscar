import { FETCH_CARS_WITH_DIST } from './types';

export const fetchCarsWithDist = () => dispatch => {
    console.log('from action')
    fetch('http://localhost:3001/getcarswithdistance')
        .then(res => res.json())
        .then(cars => dispatch({
            type: FETCH_CARS_WITH_DIST,
            payload: cars
        }));

};