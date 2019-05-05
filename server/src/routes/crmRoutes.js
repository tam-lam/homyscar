import {
  addNewCar,
  getCars,
} from "../controllers/carController";

import { 
  addNewRental,
  getRentals 
} from "../controllers/rentalController"

import { 
  addNewUser,
  loginUser
} from "../controllers/userController"

import { setUserLocation , getCarsWithDistance } from "../controllers/mapController";

const routes = (app) => {
  app.route('/car')
    .post(addNewCar)
    .get(getCars);

  app.route('/setlocation')
  .post(setUserLocation); 
    

  app.route('/getcarswithdistance')
  .get(getCarsWithDistance)
    
    
  app.route('/rental')
    .post(addNewRental)
    .get(getRentals)
    
  app.route('/newUser')
    .post(addNewUser)

  app.route('/authUser')
    .post(loginUser)
    

}

export default routes;