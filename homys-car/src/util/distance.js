
import React from 'react'
import axios from 'axios';
// var google = require('@google/maps');
//import google from '@google/maps';
const GoogleDistanceApi = require('google-distance-api');
const ORIGIN = ['Melbourne , AU']


// var googleMapsClient = require('@google/maps').createClient({
//     key: 'AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg',

// 	Promise: Promise // 'Promise' is the native constructor.
//   });


var locationsArray = ['12 Collins Street , Melbourne, AU' , '80 Swansont Street , Melbourne , AU' , '340 Flinders Street , Melbourne , AU'];

/* 
  Get car information from db
  extract location from cars into array
  pass locations to google distance api
  return array of nearest cars

*/

export default class CarList extends React.Component {

}





export const getDistance = () => {
var productsAPI = 'http://localhost:3001/cars';
var carLocations = [];

axios.get('http://localhost:3001/cars')
.then(res => {

  let products = res.data;
  console.log(products)
  for ( var i = 0 ; i < products.length ; i++){
      carLocations.push(products.location);
  }

  carLocations = products;
  console.log(products);

  
 })
 .catch(err => {
    console.log('Could not fetch products. Try again later.');
  });

  return carLocations;

}







function getCarLocations(cars){



}

const options = {
  key: 'AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg',
  origins: ORIGIN,
  destinations: locationsArray
}

var distanceArray= []
const data  = GoogleDistanceApi.distance(options, (err, data) => {
    if(err) {
        return console.log(err);
    }
 
    console.log(data);

    //var tre = JSON.parse(data);
  //  console.log("value of distance " + tre[0][1] );

  
   
    
    for(var i = 0; i < data.length; i++){
     // console.log(Object.values(data["distance"]))

      console.log(data[i].distance);
      distanceArray.push({

        destination: data[i].destination,
        distanceValue: data[i].distanceValue

      });

      

    }

    console.log(distanceArray.sort());


});




  /*
var origin1 = new google.maps.LatLng(55.930385, -3.118425);
var origin2 = 'Greenwich, England';
var destinationA = 'Stockholm, Sweden';
var destinationB = new google.maps.LatLng(50.087692, 14.421150);

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: [origin1, origin2],
    destinations: [destinationA, destinationB],
    travelMode: 'DRIVING',
    transitOptions: TransitOptions,
    drivingOptions: DrivingOptions,
    unitSystem: UnitSystem,
    avoidHighways: Boolean,
    avoidTolls: Boolean,
  }, callback);

function callback(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.

  
}
*/

// Geocode an address with a promise
// googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'}).asPromise()
//   .then((response) => {
//     console.log(response.json.results);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

