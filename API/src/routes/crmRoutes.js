import {
  addNewCar,
  // getContacts, 
  // getContactWithID, 
  // updateContact,
  // deleteContact,
} from "../controllers/crmController";

import { addNewRental } from "../controllers/rentalController"

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

  // app.route('/contact/:contactId')
  // // get specific contact
  // .get(getContactWithID)

  // // put request
  // .put(updateContact)

  // // delete request
  // .delete(deleteContact);
  app.route('/rental')
    .post(addNewRental)
}

export default routes;