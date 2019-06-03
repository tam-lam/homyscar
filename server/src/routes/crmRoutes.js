var { addNewCar,  getCars } = require("../controllers/carController");
var { addNewRental, getRentals, getUserRentals}  = require("../controllers/rentalController");
var { addNewUser, loginUser } = require("../controllers/userController");
var  {setUserLocation , getCarsWithDistance }  = require("../controllers/mapController");
var { payment, success, savePayment, getAllPayments } = require("../controllers/paymentController");
var { 
  addNewConfirmation,
  getConfirmations,
  deleteConfirmation} = require("../controllers/confirmationController");
      
const routes = (app) => {
  
  app.route('/userRentals')
    .post(getUserRentals)
  
  app.route('/success')
  .get(success)

  app.route('/pay')
  .post(payment);

  app.route('/savepayment')
  .post(savePayment)
  .get(getAllPayments);

  app.route('/car')
  .post(addNewCar)
  .get(getCars);
      
  app.route('/setlocation')
  .post(setUserLocation); 
          
  app.route('/getcarswithdistance')
  .get(getCarsWithDistance); 
        
  app.route('/rental')
  .post(addNewRental)
  .get(getRentals)
          
  app.route('/newUser')
  .post(addNewUser)
      
  app.route('/authUser')
  .post(loginUser)

  app.route('/addConfirmation')
  .post(addNewConfirmation)

  app.route('/getConfirmation')
  .get(getConfirmations)

  app.route('/deleteConfirmation')
  .delete(deleteConfirmation)
}
      
module.exports ={routes};