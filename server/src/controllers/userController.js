const bcrypt = require('bcrypt');
const User = require('../models/userModel');


const config = require('config');
const jwt = require('jsonwebtoken');

const delUser = (req, res) => {
    User.remove({_id: req.body.id}, (err, car) => {
        console.log(car)
        if (err) {
            res.send(err);
        }
        res.json(car);
    });
};

const addNewUser = (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }
    User.findOne({ email })
        .then(user => {
            if (user) 
                return res.status(400).json({ msg: 'User already exists' })});

    let newUser = new User(req.body);

    newUser.save().then( user => {
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

const updateUser  = (req, res) => {
    console.log(req.body)
    User.updateOne({_id: req.body.id}, {$set: {...req.body.data}}, (err, car) => {
        if (err) {
            res.send(err);
        }
        res.json(car);
    });
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

module.exports = { addNewUser , loginUser , getUsers,delUser,updateUser};