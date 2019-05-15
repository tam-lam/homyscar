import mongoose from 'mongoose';
import { CarSchema } from '../models/carModel';

const Car = mongoose.model('Car', CarSchema);

export const addNewCar = (req, res) => {
  let newCar = new Car(req.body);

  newCar.save((err, car) => {
    if (err) {
      res.send(err);
    }
    res.json(car);
  });
};

export const getCars = (req, res) => {
  Car.find({}, (err, car) => {
    if (err) {
      res.send(err);
    }
    res.json(car);
  });
};

export const getCarById = (req , res ) => {
  let currentCarRego = req.query.car_rego;
  Car.find({rego: currentCarRego} , (err , car) => {
    if (err) {
      res.send(err);
    }
    console.log("found car id is " , car)
    res.json(car)
  });
};