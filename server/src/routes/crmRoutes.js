var {
    addNewCar,
    getCars,
    updateCar,
    delCar
} = require("../controllers/carController");

var {addNewRental, getRentals} = require("../controllers/rentalController");

var {
    addNewUser,
    loginUser,
    delUser,
    getUsers,
    updateUser
} = require("../controllers/userController");

var {setUserLocation, getCarsWithDistance} = require("../controllers/mapController");

const routes = (app) => {
    app.route('/car')
        .post(addNewCar)
        .get(getCars)
        .put(updateCar)

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


}

module.exports = {routes};