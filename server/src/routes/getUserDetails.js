import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const express = require('express');
const router = express.Router();

const auth = require('../auth');

const User = mongoose.model('User', UserSchema);

router.get('/', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

module.exports = router;