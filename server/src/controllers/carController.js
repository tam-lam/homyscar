// import mongoose from 'mongoose';
// import { CarSchema } from '../models/carModel';

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

module.exports =  {addNewCar , getCars};