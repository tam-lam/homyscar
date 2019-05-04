import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

const auth = require('../auth');

const User = mongoose.model('User', UserSchema);

router.post('/',auth, (req, res) => {

  const { email, password } = req.body;

  // Simple Validation
  if ( !email || !password ) {
      return res.status(400).json({ msg: 'Please enter all fields'})
  }

  // Check for existing user
  User.findOne({ email })
    .then( user => {
      if (!user) return res.status(400).json({ msg: 'User does not exist' });

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  username: user.username,
                  email: user.email
                }
              })
            }
          )

        })
    })
});

router.get('/', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

module.exports = router;