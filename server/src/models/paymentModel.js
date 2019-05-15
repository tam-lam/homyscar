const mongoose = require('mongoose');
const EXPIRY_TIME = '1m'

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

  userId: {
    type: String,
    required: true,
    trim: true
    // index: { expires: EXPIRY_TIME }
  },

  payerId: {
    type: String,
    required: true,
    trim: true
    // index: { expires: EXPIRY_TIME}
  },
  paymentId: {
    type: String,
    required: true,
    trim: true
  },
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: EXPIRY_TIME }
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Payment', PaymentSchema);