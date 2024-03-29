const bcrypt = require('bcrypt');
const User = require('../models/userModel');


const config = require('config');
const jwt = require('jsonwebtoken');


const addNewUser = (req, res) => {
    const { username, email, password, dateOfBirth, licenseNo, firstName, lastName } = req.body;

    if (!username || !email || !password || !dateOfBirth || !licenseNo || !firstName || !lastName) {
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
                            _id: user.id,
                            username: user.username,
                            email: user.email,
                            isAdmin: user.isAdmin,
                            dateOfBirth: user.dateOfBirth,
                            licenseNo: user.licenseNo,
                            firstName: user.firstName,
                            lastName: user.lastName
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
                                    _id: user.id,
                                    username: user.username,
                                    email: user.email,
                                    isAdmin: user.isAdmin,
                                    dateOfBirth: user.dateOfBirth,
                                    licenseNo: user.licenseNo,
                                    firstName: user.firstName,
                                    lastName: user.lastName
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

const deleteUser = (req, res) => {
    user_id = req.query.user_id
    User.findByIdAndRemove(user_id, (err, response) => {
        if (response) {
            res.json(user_id);
        }
        else {
            res.status(404)
            res.send("User not found");
        }
    });
};

module.exports = { addNewUser, loginUser, getUsers, deleteUser};