var { addNewCar, getCars, updateCar , deleteCar} = require("../controllers/carController");
var { addNewRental, getRentals, getUserRentals , updateRental}  = require("../controllers/rentalController");
var { addNewUser, loginUser , getUsers } = require("../controllers/userController");
var  {setUserLocation , getCarsWithDistance }  = require("../controllers/mapController");
var { payment, success, savePayment, getAllPayments } = require("../controllers/paymentController");
var { 
  addNewConfirmation,
  getConfirmations,
  deleteConfirmation} = require("../controllers/confirmationController");
      
const routes = (app) => {
  
  app.route('/userRentals')
  .get(getUserRentals)

  app.route('/getUsers')
  .get(getUsers)
  
  app.route('/rentalHistory')
    .post(getUserRentals)

  app.route('/updateRental')
  .post(updateRental)

  app.route('/updateCar')
  .post(updateCar)
  
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

  app.route('/updateCar')
  .post(updateCar)
      
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

  app.route('/deleteCar')
  .delete(deleteCar)
}
      
module.exports ={routes};