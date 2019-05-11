// import mongoose from 'mongoose';
// import { UserSchema } from '../models/userModel';
// import bcrypt from 'bcrypt';

const bcrypt = require('bcrypt');
const User = require('../models/userModel');


const config = require('config');
const jwt = require('jsonwebtoken');


const addNewUser = (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    User.findOne({ email })
        .then(user => {
            if (user) 
                return res.status(400).json({ msg: 'User already exists' })});

    let newUser = new User(req.body);

    newUser.save()
        .then( user => {
            jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err , token) => {
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
};

const loginUser = (req, res) => {
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
};

const getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

module.exports = { addNewUser , loginUser , getUsers};