import { CarSchema } from '../models/crmModel';
import mongoose from 'mongoose';
const Car = mongoose.model('Car', CarSchema);
var { promisify } = require('util');

//Google Distance matrix api configs
var distance = require('google-distance-matrix'); 
distance.key('AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg');
distance.units('metric');
var { promisify} = require('util');

//var matrix = promisify(distance.matrix);
var origins = ['Melbourne , AU'];

var retrievedCars = [];
var retrievedDistances = [];

export const setUserLocation = (req , res) => {
  // origins = req.body
  // console.log("origin value is" + origins);
}

export async function getCars(req , res ){
  var carAndDistanceArray = [];

    var carsArray = [];  
    //   var h;
    var distancePromise  = new Promise( async function (resolve , reject) {    
     var carsFromDB = await Car.find({} , (err , car) =>{   
        if (err){
          res.send(err);
        }
        for ( var i = 0 ; i < car.length ; i++){
          carsArray.push(car[i]);
        }        
        return carsArray;
      });  
      
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
     var returnArray= [];
        for (var i = 0; i < carsArray.length; i++) {
            if (distances.rows[0].elements[i].status == 'OK') {
                var distance = distances.rows[0].elements[i].distance;
                var carAndDist = {car: carsArray[i] , distance: distance};
                returnArray.push(carAndDist)
            } 
        }       
        res.json(returnArray);
    })
} 

function getDestinations(databaseCars) {
  var destinationsArray = [];
  for ( var i = 0 ; i < databaseCars.length ; i++){
    var currentCar = databaseCars[i];
    destinationsArray.push(currentCar.address);
  }
  console.log(destinationsArray);
  return destinationsArray;
}

