const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RentalSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  car_rego: {
    type: String,
    required: true
  },
  booking_date: {
    type: Date,
    default: Date.now()
  },
  return_date: {
    type: Date,
    required: false
  },
  return_location: {
    type: String,
    required: false
  },
  total_price: {
    type: Number,
    required: false
  },
  on_rent: {
    type: Boolean
  }
},
{
  timestamps: {
  createdAt: "created_at",
  updatedAt: "updated_at"}
})

module.exports = mongoose.model('Rental', RentalSchema);