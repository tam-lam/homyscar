const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

  userId: {
    type: String,
    required: true,
    trim: true
  },

  payerId: {
    type: String,
    required: true,
    trim: true
  },
  paymentId: {
    type: String,
    required: true,
    trim: true
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Payment', PaymentSchema);