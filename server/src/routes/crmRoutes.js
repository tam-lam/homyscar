var { addNewCar,  getCars, updateCar,  delCar} = require("../controllers/carController");
var { addNewRental, getRentals, getUserRentals}  = require("../controllers/rentalController");
var { addNewUser, loginUser ,delUser, getUsers,updateUser} = require("../controllers/userController");
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
  .get(getCars)
  .put(updateCar);

  app.route('/car/del')
        .post(delCar)

  app.route('/user')
        .get(getUsers)
        .post(addNewUser)
        .put(updateUser)

  app.route('/user/del')
        .post(delUser)
      
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