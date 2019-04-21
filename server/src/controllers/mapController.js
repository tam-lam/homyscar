import { CarSchema } from '../models/carModel';
import mongoose from 'mongoose';
const Car = mongoose.model('Car', CarSchema);
var { promisify } = require('util');

//Google Distance matrix api configs
var distance = require('google-distance-matrix'); 
distance.key('AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg');
distance.units('metric');

//var matrix = promisify(distance.matrix);
var origins = ['Melbourne , AU'];

var retrievedCars = [];
var retrievedDistances = [];

export const setUserLocation = (req , res) => {
  var userLocation = req.body.lat + ' , ' + req.body.lng;
  origins.pop();
  origins.push(userLocation);
  //origins = userLocation;
  console.log("origin value is" + userLocation);
}

export async function getCarsWithDistance(req , res ){
  var carAndDistanceArray = [];

  var carsFromDB = [];
    //   var h;
    var distancePromise  = new Promise( async function (resolve , reject) {    
     carsFromDB = await getCarsFromDB(); 
 
      var destinations = getDestinations(carsFromDB);
      distance.matrix(origins, destinations,  function (err, distances) {
        if (err) {
            return console.log(err);
        }
        if(!distances) {
            return console.log('no distances');
        }
        if (distances.status == 'OK') {
          if (distances.rows[0].elements[0].status == 'OK') {
            var distanceValue = distances.rows[0].elements[0].distance;    
          }        
        }        
        resolve(distances);
    } );
    } ).then( function(distances){
      var carDistArray = calcDistBetweenCarsAndUser(carsFromDB , distances);     
        res.json(carDistArray);
    })
    .catch(err => {
      console.log(err.message);
      return;
    })
} 

export async function getCarsFromDB(){
  var carsArray = [];
  await Car.find({} , (err , car) =>{   
    if (err){
      res.send(err);
    }
    for ( var i = 0 ; i < car.length ; i++){
      carsArray.push(car[i]);
    }        
    
  });  
  return carsArray;
}

export function getDestinations(databaseCars) {
  var destinationsArray = [];
  for ( var i = 0 ; i < databaseCars.length ; i++){
    var currentCar = databaseCars[i];
    destinationsArray.push(currentCar.address);
  }
  console.log(destinationsArray);
  return destinationsArray;
}

export function calcDistBetweenCarsAndUser(carsFromDB , distances){
  var carAndDistArray= [];
  for (var i = 0; i < carsFromDB.length; i++) {
    if (distances.rows[0].elements[i].status == 'OK') {
        var distance = distances.rows[0].elements[i].distance;
        var carAndDist = {car: carsFromDB[i] , distance: distance};
        console.log("new dist value" + distance.text)
        carAndDistArray.push(carAndDist)
    } 
} 
return carAndDistArray;
}
