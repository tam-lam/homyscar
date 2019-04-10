import { CarSchema } from '../models/crmModel';
import mongoose from 'mongoose';
const Car = mongoose.model('Car', CarSchema);
var { promisify } = require('util');

//Google Distance matrix api configs
var distance = require('google-distance-matrix'); 
distance.key('AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg');
distance.units('metric');

//var matrix = promisify(distance.matrix);
var origins = ['Melbourne , AU'];

export async function getCars2(req , res ){

  var retrievedCars = [];
  
  await Car.find({} , (err , car) =>{
    if (err){
      res.send(err);
    }
    retrievedCars.push(car);
  });

  getDistance("12 Collins Street , Melbourne");

} 

// calc distance for a car
async function getDistance(location){
var destinations = [location];

var tempArray = [];
var temp;
var distanceValue;

var rz =  await distance.matrix(origins, destinations,  function (err, distances) {
    if (err) {
        return console.log(err);
    }
    if(!distances) {
        return console.log('no distances');
    }
    if (distances.status == 'OK') {
      if (distances.rows[0].elements[0].status == 'OK') {
        
        distanceValue = distances.rows[0].elements[0].distance;  
        console.log("distance value" + distanceValue);
      }        
    }

} );

var distancePromise = new Promise( function (resolve , reject) {

    distance.matrix(origins, destinations,  function (err, distances) {
        if (err) {
            return console.log(err);
        }
        if(!distances) {
            return console.log('no distances');
        }
        if (distances.status == 'OK') {
          if (distances.rows[0].elements[0].status == 'OK') {
            
            distanceValue = distances.rows[0].elements[0].distance;  
            console.log("distance value" + distanceValue);
            resolve(distanceValue);
          }        
        }
    
    } );
} );


var u = await distancePromise.then(function(result) {
    
    console.log(result);
    return result;
});

console.log(u);
}

