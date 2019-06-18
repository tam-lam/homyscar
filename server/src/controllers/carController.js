const mongoose = require('mongoose');
const Car = require('../models/carModel');


const addNewCar = (req, res) => {
  let newCar = new Car(req.body);

  newCar.save((err, car) => {
    if (err) {
      res.send(err);
    }
    res.json(car);
  });
};

const getCars = (req, res) => {
  Car.find({}, (err, car) => {
    if (err) {
      res.send(err);
    }
    res.json(car);
  });
};


const updateCar = (req , res) => {

    var car_to_be_updated_rego = req.body.data.car_rego
    var update_data = req.body.data

    Car.findOneAndUpdate({rego:car_to_be_updated_rego} , {$set: update_data} , (err, car) => {

        if(err) {
            res.send(err);
        }

        console.log('successful car update of car with rego' , car_to_be_updated_rego)
        res.json(res.status)
    })
}

module.exports =  {addNewCar , getCars , updateCar};