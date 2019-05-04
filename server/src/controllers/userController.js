import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import bcrypt from 'bcrypt';

const config = require('config');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
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

// export const loginUser = (req, res) => {
//     res.json({ msg: "lol" })
//     console.log("YES")
//     // const { email, password } = req.body;

//     // // Simple Validation
//     // if ( !email || !password ) {
//     //     return res.status(400).json({ msg: 'Please enter all fields'})
//     // }

//     // // Check for existing user
//     // User.findOne({ email })
//     //     .then( user => {
//     //         if (!user) return res.status(400).json({ msg: 'User does not exist' });

//     //         // Validate password
//     //         bcrypt.compare(password, user.password)
//     //             .then(isMatch => {
//     //                 if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//     //                 jwt.sign(
//     //                     { id: user.id },
//     //                     config.get('jwtSecret'),
//     //                     { expiresIn: 3600 },
//     //                     (err, token) => {
//     //                         if (err) throw err;
//     //                         res.json({
//     //                             token,
//     //                             user: {
//     //                                 id: user.id,
//     //                                 username: user.username,
//     //                                 email: user.email
//     //                             }
//     //                         })
//     //                     }
//     //                 )

//     //             })
//     //     })
// };

export const getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};