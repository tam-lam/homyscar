const {
  addNewCar,
  getCars,
} = require("../controllers/carController");

const { 
  addNewRental,
  getRentals 
} = require("../controllers/rentalController");

const { 
  addNewUser,
  loginUser
} = require("../controllers/userController");

const { setUserLocation , getCarsWithDistance } = require("../controllers/mapController");

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

module.exports ={routes};