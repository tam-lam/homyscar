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
  
  search = getConfirmationsFromDB(req.query.user_id)
  res.json(search)
}

async function getConfirmationsFromDB(requiredUserId) {
  var confirmationsArray = await Confirmation.find({}, (err, confirmations) => {
    if (err) {
      res.send(err);
    }
   
    confirmationsArray.push(confirmations)
  });
  console.log('confirmationsArray ' , confirmationsArray);
  return confirmationsArray;
}

module.exports = { addNewConfirmation , getConfirmations};