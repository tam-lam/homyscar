import {
  addNewCar,
  getCars,
} from "../controllers/carController";

import { 
  addNewRental,
  getRentals 
} from "../controllers/rentalController"

import { 
  addNewUser 
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
    
  app.route('/user')
    .post(addNewUser)

}

export default routes;