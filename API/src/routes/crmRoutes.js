import {
  addNewCar,
//  getCars,
  // getContacts, 
  // getContactWithID, 
  // updateContact,
  // deleteContact,
} from "../controllers/crmController";

import { getCars ,setUserLocation , getNearestCars} from "../controllers/mapController";

const routes = (app) => {
  app.route('/car')
    // .get(( req , res, next ) => {
    //   //middleware
    //   console.log(`Request from ${req.originalUrl}`)
    //   console.log(`Request type ${req.method}`)
    //   next();
    // }, getContacts)

    // POST endpoint
    .post(addNewCar);

    app.route('/setlocation')
    .post(setUserLocation);
  // app.route('/contact/:contactId')
  // // get specific contact
  // .get(getContactWithID)

  // // put request
  // .put(updateContact)

  // // delete request
  // .delete(deleteContact);

  app.route('/getnearestcars')
  .get(getNearestCars);

  /* retrieve all cars */
  app.route('/cars')
    .get(( req , res, next ) => {
      //middleware
      console.log(`Request from ${req.originalUrl}`)
      console.log(`Request type ${req.method}`)
      next();
    }, getCars)
}

export default routes;