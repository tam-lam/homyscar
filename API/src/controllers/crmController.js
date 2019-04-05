import mongoose from 'mongoose';
import { CarSchema } from '../models/crmModel';

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

export const getCars = (req , res) => {
  Car.find({} , (err , car) =>{
    if (err){
      res.send(err);
    }
    
    res.json(car)
  });

}

// export const getCars = (req , res) => {
//   Car.find({} , (err , car) =>{
//     if (err){
//       res.send(err);
//     }
//     res.json(car)
//   });

// }

// export const getContacts = (req, res) => {
//   Contact.find({}, (err, contact) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(contact);
//   });
// };

// export const getContactWithID = (req, res) => {
//   Contact.findById(req.params.contactId, (err, contact) => {
//   if (err) {
//     res.send(err);
//   }
//   res.json(contact);
//   });
// };

// export const updateContact = (req, res) => {
//   Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, (err, contact) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(contact);
//   });
// };

// export const deleteContact = (req, res) => {
//   Contact.remove({_id: req.params.contactId }, (err) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json({ message: 'Succ deleted contact'});
//   });
// };
