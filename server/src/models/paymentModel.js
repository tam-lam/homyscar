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
  }
},
  {
    timestamps: true
  })

PaymentSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

module.exports = mongoose.model('Payment', PaymentSchema);