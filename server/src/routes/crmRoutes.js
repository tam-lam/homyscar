import {
  addNewCar,
  getCars,
  getCarById
} from "../controllers/carController";

import { 
  addNewRental,
  getRentals 
} from "../controllers/rentalController"



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

    app.route('/getcarbyid')
  .get(getCarById)

}

export default routes;