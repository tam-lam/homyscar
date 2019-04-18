import mongoose from 'mongoose';
import { RentalSchema } from '../models/rentalModel';

const Rental = mongoose.model('Rental', RentalSchema);

export const addNewRental = (req, res) => {
  let newRental = new Rental(req.body);

  newRental.save((err, Rental) => {
    if (err) {
      res.send(err);
    }
    res.json(Rental);
  });
};

export const getRentals = (req, res) => {
  Rental.find({}, (err, rental) => {
    if (err) {
      res.send(err);
    }
    res.json(rental);
  });
};