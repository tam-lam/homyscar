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
  var car_to_be_updated_id = req.body.data._id
  var updated_data = req.body.data

  Car.findByIdAndUpdate({_id: car_to_be_updated_id} , {$set: updated_data} , (err , car) =>{

    if (err){
      res.send(err);
    }

    console.log('successfully updated car with' , car_to_be_updated_id)
    res.json(res.status)
  }) 
}

module.exports =  {addNewCar , getCars , updateCar};