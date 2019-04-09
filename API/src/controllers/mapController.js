import { CarSchema } from '../models/crmModel';
import mongoose from 'mongoose';
const Car = mongoose.model('Car', CarSchema);



//Google Distance matrix api configs
var distance = require('google-distance-matrix'); 
distance.key('AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg');
distance.units('metric');
var origins = ['Melbourne , AU'];
 

var locationsArray = ['12 Collins Street , Melbourne, AU' , '80 Swansont Street , Melbourne , AU' , '340 Flinders Street , Melbourne , AU'];
var google = require('@google/maps');
const ORIGIN = ['Melbourne , AU'];
//const ORIGIN = ['-37.5340169', '144.900642'];

// Google Distance api configs
const GoogleDistanceApi = require('google-distance-api');
const options = {
  key: 'AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg',
  origins: ORIGIN,
  destinations: locationsArray
}



export const setUserLocation = (req , res) => {
  var currentUserLocation = req.body;
  console.log("saveing current location" + req.body);
  //console.log(Object.));
  console.log(req.body.lat);
  console.log(req.body.lng );
  console.log(options.origins);
  //options.origins = [req.body.lat , req.body.lng ]
 // options.origins = [req.body.lat ,req.body.lng ]
  console.log(options.origins);
 // options.origins = [ req.body.lat , req.body.ln ]

  // GoogleDistanceApi.distance(options, (err, data) => {
  //   if(err) {
  //       return console.log(err);
  //   }
 
  //   console.log(data);
  // });

}


export const getCars = (req , res) => {


  Car.find({} , (err , car) =>{
    if (err){
      res.send(err);
    }
    
    var carArray = [];

    // mock data
    var temp = { rego: "TRE456" , car : "BMW" , lat: '-37.910030' , lng: '144.662290' };
    var temp2 = { rego: "MJH478" ,car : "Nissan" , lat: '-38.110840' , lng: '145.287970' };
    var temp3 = {rego: "QWE406" , car : "Toyota" , lat: '-37.812250' , lng: '144.965330' };
    carArray.push(temp);
    carArray.push(temp2);
    carArray.push(temp3);




    // for(var i = 0 ; i < car.length ; i++){

      
    //   console.log(car[i].location);
    //   var distanceValue = getDistance(car[i].location);
    //   console.log("distance value" + distanceValue);
    //   var temp = { name : "hello" , distance : distanceValue };

      
    // }

    res.json(carArray)
  });






}

// calc distance for a car
const getDistance = (location) => {
var destinations = [location];

var array = [];
var temp;

distance.matrix(origins, destinations,  function (err, distances) {
  

    if (err) {
        return console.log(err);
    }
    if(!distances) {
        return console.log('no distances');
    }
    if (distances.status == 'OK') {
      if (distances.rows[0].elements[0].status == 'OK') {
        
         var distance = distances.rows[0].elements[0].distance;
         
        
      }    
}
    
});


console.log(temp)

}




var distanceArray= []
export const getNearestCars = (req , res)  => {

 GoogleDistanceApi.distance(options, (err, data) => {
    if(err) {
        return console.log(err);
    }
 
    console.log(data);
});


}
