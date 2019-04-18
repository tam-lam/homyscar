import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RentalSchema = new Schema({

  rental_id: {
    type: String,
    required: true
  },
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
    required: true
  },
  return_date: {
    type: Date,
    required: true
  },
  return_location: {
    type: String,
    required: true
  },
  total_price: {
    type: Number,
    required: true
  }
},
{
  timestamps: {
  createdAt: "created_at",
  updatedAt: "updated_at"}
})
