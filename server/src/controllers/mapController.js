const mongoose = require('mongoose');
const Car = require('../models/carModel');
const Confirmations = require('../models/confirmationModel')
const Rentals = require('../models/rentalModel');

var { promisify } = require("util");

//Google Distance matrix api configs
var distance = require("google-distance-matrix");
distance.key("AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg");
distance.units("metric");

//var matrix = promisify(distance.matrix);
var origins = ["Melbourne , AU"];

var retrievedCars = [];
var retrievedDistances = [];

const setUserLocation = (req, res) => {
  var userLocation = req.body.lat + " , " + req.body.lng;
  origins.pop();
  origins.push(userLocation);
  //origins = userLocation;
  console.log("origin value is" + userLocation);
};

const  getCarsWithDistance = (req, res) => {
  

  // initialise arrays
  var carsFromDB = [];
  var confirmationsFromDB = [];
  var rentalsFromDB = [];
  var availableCars = [];

  var distancePromise = new Promise(async function(resolve, reject) {
    carsFromDB = await getCarsFromDB();
    confirmationsFromDB = await getConfirmationsFromDB();
    rentalsFromDB = await getRentalsFromDB();

    availableCars = await getOnlyAvailableCars(carsFromDB , rentalsFromDB , confirmationsFromDB);


    var destinations = getDestinations(availableCars);
    distance.matrix(origins, destinations, function(err, distances) {
      if (err) {
        return console.log(err);
      }
      if (!distances) {
        return console.log("no distances");
      }
      if (distances.status == "OK") {
        if (distances.rows[0].elements[0].status == "OK") {
          var distanceValue = distances.rows[0].elements[0].distance;
          resolve(distances);
        }
      }
    });
  })
    .then(function(distances) {
      try {
        if (distances.status != "OK") throw "Distances is empty";
        var carDistArray = calcDistBetweenCarsAndUser(carsFromDB, distances);
        res.json(carDistArray);
      } catch (err) {
        console.log(err);
      }
    })
    .catch(err => {
      console.log(err.message);
      return;
    });
}

async function getCarsFromDB() {
  var carsArray = [];
  await Car.find({}, (err, car) => {
    if (err) {
      console.log("error in getCarsFromDB" , err)
      return;
    }
    for (var i = 0; i < car.length; i++) {
      carsArray.push(car[i]);
    }
  });
  return carsArray;
}

async function getConfirmationsFromDB(){
  var confirmationsArray = [];

  await Confirmations.find({} , (err , confirmation) => {
    if (err) {
      res.send(err);
    }
    for (var i = 0 ;  i < confirmation.length ; i++ ){
      confirmationsArray.push(confirmation[i]);
    }
  });
  return confirmationsArray;
}

async function getRentalsFromDB(){
  var rentalsArray = [];

  await Rentals.find({} , (err , rental) => {
    if (err) {
      res.send(err);
    }
    for (var i = 0 ;  i < rental.length ; i++ ){
      rentalsArray.push(rental[i]);
    }
  });
  return rentalsArray;
}

async function getOnlyAvailableCars(carsArray , rentalsArray ,  confirmationsArray){

  var unavailableCars = []
  for ( var x = 0 ; x < confirmationsArray.length; x++){
      console.log('confirmation unavailble is ' , confirmationsArray)
      unavailableCars.push(confirmationsArray[x].rego);
  }

  for ( x = 0 ; x < rentalsArray.length; x++){
      console.log('rental unavailable for  ' , rentalsArray[x].car_rego)
      unavailableCars.push(rentalsArray[x].car_rego);
  }

  console.log('unavailable cars are ' , unavailableCars);
  var availableCars = []
  for (var i = 0; i < carsArray.length; i++) {
    var isAvailable = false;
    for ( var j = 0 ; j < unavailableCars.length ; j++){
      if (carsArray[i].rego === unavailableCars[j]){
        isAvailable = true;
      }
    }
    
    if (isAvailable == false){
      availableCars.push(carsArray[i]);
    }
  }
  return availableCars;
}

function getDestinations(databaseCars) {
  var destinationsArray = [];
  for (var i = 0; i < databaseCars.length; i++) {
    var currentCar = databaseCars[i];
    destinationsArray.push(currentCar.address);
  }
  console.log(destinationsArray);
  return destinationsArray;
}

function calcDistBetweenCarsAndUser(carsFromDB, distances) {
  console.log(distances);
  var carAndDistArray = [];
  for (var i = 0; i < carsFromDB.length; i++) {
    if (distances.status == "OK") {
      if (distances.rows[0].elements[i]) {
        if (distances.rows[0].elements[i].status == "OK") {
          var distance = distances.rows[0].elements[i].distance;
          var carAndDist = { car: carsFromDB[i], distance: distance };
          console.log("new dist value" + distance.text);
          carAndDistArray.push(carAndDist);
        }
      }
    }
  }
  return carAndDistArray;
}

module.exports = { setUserLocation , getCarsWithDistance   };