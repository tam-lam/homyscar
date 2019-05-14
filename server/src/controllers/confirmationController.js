const mongoose = require('mongoose');
const Confirmation = require('../models/confirmationModel');

const addNewConfirmation = (req , res) => {
    let newConfirmation = new Confirmation(req.body);
    console.log('new confirmation =' , newConfirmation);

    newConfirmation.save((err, confirmation) => {
        if (err) {
          console.log('error found' , err)
          res.send(err);
        }
        console.log('confirmation recieved' , confirmation)
        res.json(confirmation);
      });
}

const getConfirmations = (req , res) => {
  console.log('client is requesting confirmations for ' , req.query.user_id)
 
  var requiredUserId = req.query.user_id;
  Confirmation.find({user_id: requiredUserId}, (err, confirmations) => {
    if (err) {
      res.send(err);
    }
   console.log('found confirmation is ' , confirmations);
    res.json(confirmations)
  });
}



module.exports = { addNewConfirmation , getConfirmations};