const { setUserLocation , getCarsFromDB ,  getCarsWithDistance , getDestinations , calcDistBetweenCarsAndUser } = require("../src/controllers/mapController");
var expect = require('chai').expect;
const should = chai.should();

describe('Test' , () => {
    it('Should return address of car object' , () => {
      var tempArray = [];
      var tempItem  = { car: "mazda" , address: "02 russell street , melbourne , au" };
      tempArray.push(tempItem);
      expect(getDestinations(tempArray)).equal([tempItem.address]);
    });

    it( "Should return an array of car along with its distance" ,   () => {

      var mockGoogleResponse = {destination_addresses : [ "New York, NY, USA" ],
      origin_addresses : [ "Washington, DC, USA" ],
      rows : [
         {
            elements : [
               {
                  distance : {
                     "text" : "225 mi",
                     "value" : 361715
                  },
                  duration : {
                     "text" : "3 hours 49 mins",
                     "value" : 13725
                  },
                  status : "OK"
               }
            ]
         }
      ],
      status : "OK"};

      var mockCar = {"_id":"5cadcbb3682cc43784094fc8","rego":"ABC123","model":"Camry","year":2013,"make":"Toyota","body":"sedan","transmission":"Auto","availability":true,"damaged":false,"address":"254 Domain Rd , Melbourne , AU",
      "price":25,"lat":-37.8345,"lng":144.987,"createdAt":"2019-04-10T10:55:47.016Z","updatedAt":"2019-04-10T10:55:47.016Z","__v":0}

      var mockCarArray  = [];
      mockCarArray.push(mockCar);
      var mockDistanceArray  = [];
      mockDistanceArray.push(mockGoogleResponse);
      console.log(mockDistanceArray);
      expect(calcDistBetweenCarsAndUser(mockCarArray , mockDistanceArray[0])).equal([{car: mockCar , distance: mockGoogleResponse.rows[0].elements[0].distance }]);

    });

    it("Should return right amount of values" , () => {
      var tempArray = [];
      var tempItem  = { car: "mazda" , address: "02 russell street , melbourne , au" };
      tempArray.push(tempItem);
      tempArray.push(tempItem);
      tempArray.push(tempItem);
      tempArray.push(tempItem);
      expect(getDestinations(tempArray).length ).equals(4);
    });





})