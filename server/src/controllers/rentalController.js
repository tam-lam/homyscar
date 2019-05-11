//import mongoose from 'mongoose';
//import { RentalSchema } from '../models/rentalModel';
const mongoose = require('mongoose');
const Rental = require('../models/rentalModel');

const addNewRental = (req, res) => {
  let newRental = new Rental(req.body);

  newRental.save((err, Rental) => {
    if (err) {
      res.send(err);
    }
    res.json(Rental);
  });
};

const getRentals = (req, res) => {
  Rental.find({}, (err, rental) => {
    if (err) {
      res.send(err);
    }
    res.json(rental);
  });
};

module.exports = { addNewRental , getRentals};