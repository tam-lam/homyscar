const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

const SALT_ROUNDS = 12;

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true,
        createIndex: {unique: true},
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        createIndex: { unique: true },
        validate: {
            validator: emailValidator.validate,
            message: props => `${props.value} is not a valid email address`,
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        createIndex: { unique: true },
        minlength: 8,
    }
},
    {
        timestamps: true
    })

UserSchema.pre( 'save', async function preSave(next) {
    const user = this;
    if(!user.isModified('password')) return next();
    try {
        const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
        user.password = hash;
        return next();
    } catch(err) {
        return next(err);
    }
})

UserSchema.methods.comparePassword = async function comparePassword(candidate) {
    return bcrypt.compare(candidate, this.password);
}

module.exports = mongoose.model('User', UserSchema);