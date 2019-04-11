import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CarSchema = new Schema({

  rego: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    min: 2000,
    max: 2019,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  transmission: {
    type: String,
    enum: ['Manual', 'Auto'],
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  },
  damaged: {
    type: Boolean,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
},
{
    timestamps: {
      created_at: "created_at",
      updated_at: "updated_at"
    }
})