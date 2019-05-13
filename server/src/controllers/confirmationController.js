const mongoose = require('mongoose');
const Confirmation = require('../models/confirmationModel');

const addNewConfirmation = (req , res) => {
    let newConfirmation = new Confirmation(req.body);
    newConfirmation.save((err, confirmation) => {
        if (err) {
          res.send(err);
        }
        res.json(confirmation);
      });
}

module.exports = { addNewConfirmation};