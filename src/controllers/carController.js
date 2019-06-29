const mongoose = require('mongoose');
const Car = require('../models/carModel');


const addNewCar = (req, res) => {
  let newCar = new Car(req.body);

  console.log(newCar)
  
  Car.findOne({ rego: req.body.rego }, (err, car) => {
    if (!car) {
      newCar.save((err, car) => {
        if (err) {
          res.send(err);
        }
        res.json(car);

      });
    }
    else {
      res.status(400)
      res.send("Car Exists")
    }
  })
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


const deleteCar = (req , res) => {
  var id = req.query.car_id

  Car.findOneAndDelete({_id: id} , ( err , car) =>{
          if (err) {
                  res.send(err);
          }
          console.log('deleting car with id' , id);
          res.json(res.status)
  });
}

module.exports =  {addNewCar , getCars , updateCar , deleteCar};
